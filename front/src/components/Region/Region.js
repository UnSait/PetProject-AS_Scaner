import './Region.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { arrRegNum } from '../../utils/constants'

function Region() { 
    const navigate = useNavigate();
    //номер региона пробрасываем в API (для ulr)
    let { regNum } = useParams();
    //переменные с информацией о последней проверке
    const [lastDateScan, setLastDateScan] = useState();
    const [lastASlistInfo, setlastASlistInfo] = useState([]);
    const [lastComeASlistInfo, setLastComeASlistInfo] = useState();
    const [lastGoneASlistInfo, setLastGoneASlistInfo] = useState([]);    
    //переменные с информацией о текущей проверке
    const [currentASlistInfo, setCurrentASlistInfo] = useState([]);
    const [currentComeASlistInfo, setCurrentComeASlistInfo] = useState([]);
    const [currentGoneASlistInfo, setCurrentGoneASlistInfo] = useState([]);
    //состояния загрузки (используется для прелодера)
    const [loandingData, setLoandingData] = useState(true);
    //состояние видимости (использется для кнопки вызывающей список AS)
    const [ASlistVisible, setASlistVisible] = useState(false);    
    
    //функция проверки промиса
    const checkResponse = (res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    };    
    //запрос на получение данных о результатах проверок
    const getScanInfo = () => {
        //получаем номер региона из параметров (useParams)
        return fetch(`https://api-as-scaner.space/regions/${regNum}`, {
          method: 'GET'
        })
        .then(checkResponse)
    };
    //запрос на сохранение текущего результата проверки
    //передаем 3 списка AS (полный, список ушедших и пришедших)
    const saveCurrentScanInfo = ({ASNumbers, ASNumbersCome, ASNumbersGone}) => {
        //получаем номер региона из параметров (useParams)
        return fetch(`https://api-as-scaner.space/regions/${regNum}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          //передаем 3 списка AS (полный, список ушедших и пришедших)  
          body: JSON.stringify({ASNumbers, ASNumbersCome, ASNumbersGone})
        })
        .then(checkResponse)
      };
    //для возврата на предыдушую страницу
    function goBack() {
        navigate('/regions');
    }
    //для отображения/скрытия списка AS
    const showASlist = () => {
        setASlistVisible(ASlistVisible => !ASlistVisible)
    }
    //обработчик отправки данных на сервер
    function handleSubmit(e) {
        e.preventDefault();
        //вызываем запрос с и передаем данные по текущей проверке
        saveCurrentScanInfo({
            ASNumbers: currentASlistInfo,
            ASNumbersCome: currentComeASlistInfo,
            ASNumbersGone: currentGoneASlistInfo
        })
        .then(() => {
            //редиректим на страницу с информацией о положительном статусе запроса
            navigate('/successfully');
        })
        .catch((err) => {
            //редиректим на страницу с информацией об отрицательном статусе запроса
            navigate('/failed')
            console.log("Не удалось загрузить:", err);
        })
    }
    //функция сравнения списков AS, передаем 2 массива (текущий список и последний записанный) и возваращем результат сравнения
    function compareForGone(last, current) {
        setCurrentGoneASlistInfo(last.filter(i=>current.indexOf(i)<0));
    }
    //функция сравнения списков AS, передаем 2 массива (текущий список и последний записанный) и возваращем результат сравнения
    function compareForCome(last, current) {
        setCurrentComeASlistInfo(current.filter(i=>last.indexOf(i)<0));
    }
    //при вызове страницы отправляем запрос результатов проверок на сервер
    useEffect(() => {
        //если в regNum используются непредусмотренные номера регионов, редиректим на 404
        if (!arrRegNum.includes(regNum)) {
          navigate('/not_found')
        } else {
            getScanInfo()
                .then((res) => {
                    //если в базе данных нет записи последний проверки, вернется null
                    if (res.lastResult == null) {
                        setLastDateScan("данные отсутствуют");
                        setCurrentASlistInfo(res.currentResult);
                        setLastComeASlistInfo([])
                        setLastGoneASlistInfo([])
                        //передаем пустой массив в качетсве аргуемнта last, так как данные отстутсвуют
                        compareForGone([], res.currentResult)
                        //передаем пустой массив в качетсве аргуемнта last, так как данные отстутсвуют
                        compareForCome([], res.currentResult) 
                        //изменяем состояние заргурзки         
                        setLoandingData(false);
                    } else {
                        //передаем данные в переменные последней проверки
                        setLastDateScan(res.lastResult.dateScaning);
                        setlastASlistInfo(res.lastResult.ASNumbers);
                        setLastComeASlistInfo(res.lastResult.ASNumbersCome)
                        setLastGoneASlistInfo(res.lastResult.ASNumbersGone)
                        //передаем данные в переменные текущей проверки
                        setCurrentASlistInfo(res.currentResult);
                        compareForGone(res.lastResult.ASNumbers, res.currentResult);
                        compareForCome(res.lastResult.ASNumbers, res.currentResult);
                        //изменяем состояние заргурзки 
                        setLoandingData(false);
                    }      
                })
                .catch((err) => {
                    //если превышен лимит запросов - редиректим на информационную страницу
                    if(err == "Ошибка 429") {
                        navigate('/request_limit')
                    } else {
                        console.log("Не удалось загрузить:", err);
                        navigate('/error')
                        //изменяем состояние заргурзки
                        setLoandingData(false);
                    }
                })
        }
    }, []);
        
    return (
    <section className='region'>
        {/* получаем номер региона из параметров (useParams) */}
        <h2 className='region__title'>Регион №{regNum}</h2>
        <div className='region__container'>
            <div className='region-last-info__container region-info__container'>
            {/* изначально отображается прелодера, после получения данных с сервера рендерятся рабочие поля */}
            {loandingData 
            ?          
            <Preloader />     
            :
            // поле с информацией по последней проверке
            <div>
                <h3 className='region-info__title'>Последняя проверка</h3>
                <p className='region-info__date region-info__string'>Дата: {lastDateScan}</p>
                <p className='region-info__quantityAS region-info__string'>Количество AS: {lastASlistInfo.length}</p>
                {/* кнопка показывающая список AS */}
                {!ASlistVisible &&
                    <button className='region-info__btn' type='button' onClick={showASlist}>Показать список всех AS</button>
                }
                {ASlistVisible &&
                    <div>
                        <p className='region-info__AS-numbers region-info__string'>Список всех AS: {
                        lastASlistInfo.length > 0
                        ?
                        lastASlistInfo.join(', ')
                        :
                        0
                        }
                        </p>
                        <p className='region-info__AS-numbers_come region-info__string'>Новые AS: {
                        lastComeASlistInfo.length > 0
                        ?
                        lastComeASlistInfo.join(', ')
                        :
                        0
                        }
                        </p>
                        <p className='region-info__AS-numbers_gone region-info__string'>Ушедшие AS: {
                        lastGoneASlistInfo.length > 0
                        ?
                        lastGoneASlistInfo.join(', ')
                        :
                        0
                        }
                        </p>
                        {/* кнопка скрывающая список AS */}
                        <button className='region-info__btn' type='button' onClick={showASlist}>Скрыть список</button>
                    </div>
                }                
            </div>
            }
            </div>

            <div className='region-current-info__container region-info__container'>
            {/* изначально отображается прелодера, после получения данных с сервера рендерятся рабочие поля */}
            {loandingData 
            ?          
            <Preloader />     
            :
            // поле с информацией по последней проверке
            <div>
                <h3 className='region-info__title'>Текущая проверка</h3>
                <p className='region-info__quantityAS region-info__string'>Количество AS: {currentASlistInfo.length}</p>
                <p className='region-info__AS-numbers_come region-info__string'>Новые AS: {
                currentComeASlistInfo.length > 0
                ?
                currentComeASlistInfo.join(', ')
                :
                'Изменений нет'
                }
                </p>
                <p className='region-info__AS-numbers_gone region-info__string'>Ушедшие AS: {
                currentGoneASlistInfo.length > 0
                ?
                currentGoneASlistInfo.join(', ')
                :
                'Изменений нет'
                }
                </p>
                {/* если отстутсвуют изменения скрываем кнопку submit */}
                {(currentComeASlistInfo.length > 0 || currentGoneASlistInfo.length > 0) &&
                    <button className='region-info__btn' type='button' onClick={handleSubmit}>Сохранить</button>
                }
            </div>    
            }
            </div>            

        </div>
        {/* скрываем кнопку навигации во время ожидания данных с сервера (багается если не дождаться и нажать) */}
        {!loandingData &&
            <button className='region__container-btn' onClick={goBack} type='button'>&larr;Назад</button>
        }  
    </section>
    );
  }
  
  export default Region;