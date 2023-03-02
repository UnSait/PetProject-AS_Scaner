const scanResult = require('../models/scanResult');
const puppeteer = require('puppeteer');

module.exports.getScanInfo = (req, res) => {  
  //берем номер региона из url
  const region = req.params.regionNum;
  
  //находим по номеру региона последний результат проверки в БД
  scanResult.findOne({ region }).limit(1).sort({$natural:-1})
  //пробрасываем данные о последнем результате проверки и номер региона
    .then((lastScanResult) => {
      scanResultsHandler(region, lastScanResult, res);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.saveCurrentScanInfo = (req, res) => {
  //берем из тела запроса списки автономных систем
  const {
    ASNumbers,
    ASNumbersCome,
    ASNumbersGone,    
  } = req.body;
  scanResult.create({
    //дату генерируем на сервере
    dateScaning: new Date,
    //номер региона берем из url запроса
    region: req.params.regionNum,
    ASNumbers,
    ASNumbersCome,
    ASNumbersGone,
    })
     .then((result) => {        
       return res.send(result)})
     .catch((err) => {
       console.log(err);
     });
};

//Функция для сркапинга
async function scanResultsHandler(regNum, lastResult, res) {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    //передаем в url номер региона, который получаем из req.params
    await page.goto(`https://www.ididb.ru/runet/map/#${regNum}`)
    //ждем появления списка AS
    await page.waitForSelector('#resultList');
    //ждем появления кнопки "Показать больше"
    await page.waitForTimeout(5000)
    //создаем проверку на наличие на странице кнопки "Показать больше"
    const exist = await page.$('#resultList > div > bitton')   
    //если на странице кнопки "Показать больше" нет сразу запускаем скрапинг
    if (exist == null) {
      try { 
          const currentResult = await page.evaluate(() => {
          // получаем количество автономных систем на странице, используем как предел счетчика в цикле
          const quantityAS = Object.keys(document.querySelectorAll('tr')).length;
          console.log(Object.keys(document.querySelectorAll('tr')).length);    
          //создаем пустой массив куда пушим собранные со страницы данные
          let arrayAS = [];    
          //счетчик начинается с 1 потому что 1ый элемент с тегом tr нам не нужен
          for (let i = 1; i < quantityAS; i++) {
            arrayAS.push(document.querySelectorAll('tr')[i].firstElementChild.innerText)
          }  
          //возвращаем полученный список AS
          return arrayAS;
        });
        browser.close();
        //отправляем массив и данные последней проверки на клиент    
        return res.send({currentResult, lastResult})
      } catch(err) { 
        browser.close();
        return res.send(err)
      }
    //при наличии на странице кнопки "Показать больше" запускаем часть часть кода с иммитацией ее нажатия    
    } else {
      try {
        //создаем переменную в которую записываем данные о наличии/отсутствии кнопки "Показать больше"
        let existBtn;
        //запускаем цикл сразу, без проверки, так как мы уже проверили наличие кнопки выше
        do {
          //нажимаем на кнопку "Показать больше"
          await page.click('#resultList > div > bitton');
          //ждем обновления списка AS
          await page.waitForTimeout(3000);
          //после обновления списка AS записываем в переменную existBtn данные о наличии/отсутствии кнопки "Показать больше"
          existBtn = await page.$('#resultList > div > bitton');
          //замыкаем цикл на переменной existBtn, если existBtn будет равен null исполнение цикла прекратится (короче говоря будет нажимать на кнопку "Показать больше" ltдо момента пока она не исчезнет)
        } while (existBtn);
        
        const currentResult = await page.evaluate(() => {
          // получаем количество автономных систем на странице, используем как предел счетчика в цикле
          const quantityAS = Object.keys(document.querySelectorAll('tr')).length;    
          //создаем пустой массив куда пушим собранные со страницы данные
          let arrayAS = [];    
          //счетчик начинается с 1 потому что 1ый элемент с тегом tr нам не нужен
          for (let i = 1; i < quantityAS; i++) {
            arrayAS.push(document.querySelectorAll('tr')[i].firstElementChild.innerText)
          }
          //возвращаем полученный список AS
          return arrayAS;
        });
        browser.close();
        //отправляем массив и данные последней проверки на клиент
        return res.send({currentResult, lastResult})
      } catch(err) {
        browser.close();
        return res.send(err)
      }
    }
  } catch(err) {
    return res.send(err)
  }
}