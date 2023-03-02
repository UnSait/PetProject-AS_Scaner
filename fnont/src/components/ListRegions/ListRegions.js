import './ListRegions.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ListRegions() { 
    const navigate = useNavigate();

    function goBack() {
        navigate('/');
    }

    const [district, setDistrict] = useState(true);

    const [districtCFO, setDistrictCFO] = useState(false);
    const [districtSZFO, setDistrictSZFO] = useState(false);
    const [districtUFO, setDistrictUFO] = useState(false);
    const [districtSKFO, setDistrictSKFO] = useState(false);
    const [districtPFO, setDistrictPFO] = useState(false);
    const [districtYFO, setDistrictYFO] = useState(false);
    const [districtSFO, setDistrictSFO] = useState(false);
    const [districtDFO, setDistrictDFO] = useState(false);


    const showDistrictCFO = () => {
        setDistrictCFO(districtCFO => !districtCFO);
        setDistrict(district => !district);
    }

    const showDistrictSZFO = () => {
        setDistrictSZFO(districtSZFO => !districtSZFO);
        setDistrict(district => !district);
    }

    const showDistrictUFO = () => {
        setDistrictUFO(districtUFO => !districtUFO);
        setDistrict(district => !district);
    }

    const showDistrictSKFO = () => {
        setDistrictSKFO(districtSKFO => !districtSKFO);
        setDistrict(district => !district);
    }

    const showDistrictPFO = () => {
        setDistrictPFO(districtPFO => !districtPFO);
        setDistrict(district => !district);
    }

    const showDistrictYFO = () => {
        setDistrictYFO(districtYFO => !districtYFO);
        setDistrict(district => !district);
    }

    const showDistrictSFO = () => {
        setDistrictSFO(districtSFO => !districtSFO);
        setDistrict(district => !district);
    }

    const showDistrictDFO = () => {
        setDistrictDFO(districtDFO => !districtDFO);
        setDistrict(district => !district);
    }

    
    
    return (
    <section className='list-regions'>
        <h2 className='list-regions-container__title'>            
            {district
            ?
            'Выберете округ'
            :
            'Выберете регион'
            }           
        </h2>

        {district &&
        // кнопки для перехода в список регионов
            <div>
                <ul className='list-regions-container__region'>
                    <li>   
                        <button className='list-regions-container__region-btn' onClick={showDistrictCFO} type='button'>ЦФО</button>
                    </li>
                    <li>  
                        <button className='list-regions-container__region-btn' onClick={showDistrictSZFO} type='button'>СЗФО</button>
                    </li>
                    <li>  
                        <button className='list-regions-container__region-btn' onClick={showDistrictUFO} type='button'>ЮФО</button>
                    </li>
                    <li>  
                        <button className='list-regions-container__region-btn' onClick={showDistrictSKFO} type='button'>СКФО</button>
                    </li>
                    <li>  
                        <button className='list-regions-container__region-btn' onClick={showDistrictPFO} type='button'>ПФО</button>
                    </li>
                    <li>  
                        <button className='list-regions-container__region-btn' onClick={showDistrictYFO} type='button'>УФО</button>
                    </li>
                    <li>  
                        <button className='list-regions-container__region-btn' onClick={showDistrictSFO} type='button'>СФО</button>
                    </li>
                    <li>  
                        <button className='list-regions-container__region-btn' onClick={showDistrictDFO} type='button'>ДФО</button>
                    </li>
                </ul>

                <button className='list-regions__btn' onClick={goBack} type='button'>&larr;Назад</button>  
            </div>
        }

        {/* ссылки регионов всех округов */}
        {districtCFO &&
        <div>
            <ul className='list-regions-container__region'>
                
                <li>
                    <Link to='31'>
                        <p className='list-regions-container__region-link'>Белгородская область</p>
                    </Link>
                </li>
        

            
                <li>
                    <Link to='32'>
                        <p className='list-regions-container__region-link'>Брянская область</p>
                    </Link>
                </li>
                

                
                <li>
                    <Link to='33'>
                        <p className='list-regions-container__region-link'>Владимирская область</p>
                    </Link>   
                </li>
                

            
                <li>
                    <Link to='36'>
                        <p className='list-regions-container__region-link'>Воронежская область</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='37'>
                        <p className='list-regions-container__region-link'>Ивановская область</p>
                    </Link> 
                </li>
                
                
                
                <li>
                    <Link to='40'>
                        <p className='list-regions-container__region-link'>Калужская область</p>
                    </Link>
                </li>


                
                <li>
                    <Link to='44'>    
                        <p className='list-regions-container__region-link'>Костромская область</p>
                    </Link>     
                </li>

                

                <li>
                    <Link to='46'>
                        <p className='list-regions-container__region-link'>Курская область</p>
                    </Link>  
                </li>
                

            
                <li>
                    <Link to='77'>
                        <p className='list-regions-container__region-link'>Москва и Московская область</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='57'>
                        <p className='list-regions-container__region-link'>Орловская область</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='62'>    
                        <p className='list-regions-container__region-link'>Рязанская область</p>
                    </Link>     
                </li>

                <li>
                    <Link to='67'>    
                        <p className='list-regions-container__region-link'>Смоленская область</p>
                    </Link>     
                </li>


                <li>
                    <Link to='68'>    
                        <p className='list-regions-container__region-link'>Тамбовская область</p>
                    </Link>     
                </li>


                <li>
                    <Link to='69'>    
                        <p className='list-regions-container__region-link'>Тверская область</p>
                    </Link>     
                </li>


                <li>
                    <Link to='71'>    
                        <p className='list-regions-container__region-link'>Тульская область</p>
                    </Link>     
                </li>


                <li>
                    <Link to='76'>    
                        <p className='list-regions-container__region-link'>Ярославская область</p>
                    </Link>     
                </li>
            
            </ul>
            <button className='list-regions__btn' onClick={showDistrictCFO} type='button'>&larr;Назад</button> 
        </div> 
        }

        {districtSZFO &&
        <div>
            <ul className='list-regions-container__region'>
                
                <li>
                    <Link to='29'>
                        <p className='list-regions-container__region-link'>Архангельская область</p>
                    </Link>
                </li>
        

            
                <li>
                    <Link to='35'>
                        <p className='list-regions-container__region-link'>Вологодская область</p>
                    </Link>
                </li>
                

                
                <li>
                    <Link to='39'>
                        <p className='list-regions-container__region-link'>Калининградская область</p>
                    </Link>   
                </li>
                

            
                <li>
                    <Link to='51'>
                        <p className='list-regions-container__region-link'>Мурманская область</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='83'>
                        <p className='list-regions-container__region-link'>Ненецкий автономный округ</p>
                    </Link> 
                </li>
                
                
                
                <li>
                    <Link to='53'>
                        <p className='list-regions-container__region-link'>Новгородская область</p>
                    </Link>
                </li>

                

                <li>
                    <Link to='60'>
                        <p className='list-regions-container__region-link'>Псковская область</p>
                    </Link>  
                </li>
                

            
                <li>
                    <Link to='10'>
                        <p className='list-regions-container__region-link'>Республика Карелия</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='11'>
                        <p className='list-regions-container__region-link'>Республика Коми</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='78'>    
                        <p className='list-regions-container__region-link'>Санкт-Петербург и Ленинградская область</p>
                    </Link>     
                </li>
               
            
            </ul>
            <button className='list-regions__btn' onClick={showDistrictSZFO} type='button'>&larr;Назад</button> 
        </div> 
        }

        {districtUFO &&
        <div>
            <ul className='list-regions-container__region'>
                
                <li>
                    <Link to='23'>
                        <p className='list-regions-container__region-link'>Краснодарский край</p>
                    </Link>
                </li>
        

            
                <li>
                    <Link to='01'>
                        <p className='list-regions-container__region-link'>Республика Адыгея</p>
                    </Link>
                </li>
                

                
                <li>
                    <Link to='61'>
                        <p className='list-regions-container__region-link'>Ростовская область</p>
                    </Link>   
                </li>
                

            
                <li>
                    <Link to='34'>
                        <p className='list-regions-container__region-link'>Волгоградская область</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='08'>
                        <p className='list-regions-container__region-link'>Республика Калмыкия</p>
                    </Link> 
                </li>
                
                
                
                <li>
                    <Link to='30'>
                        <p className='list-regions-container__region-link'>Астраханская область</p>
                    </Link>
                </li>


                
                <li>
                    <Link to='91'>    
                        <p className='list-regions-container__region-link'>Республика Крым и Севастополь</p>
                    </Link>     
                </li>

                

                <li>
                    <Link to='81'>
                        <p className='list-regions-container__region-link'>Луганская Народная Республика</p>
                    </Link>  
                </li>
                

            
                <li>
                    <Link to='80'>
                        <p className='list-regions-container__region-link'>Донецкая Народная Республика</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='85'>
                        <p className='list-regions-container__region-link'>Запорожская область</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='84'>    
                        <p className='list-regions-container__region-link'>Херсонская область</p>
                    </Link>     
                </li>
            
            </ul>
            <button className='list-regions__btn' onClick={showDistrictUFO} type='button'>&larr;Назад</button> 
        </div> 
        }

        {districtSKFO &&
        <div>
            <ul className='list-regions-container__region'>
                
                <li>
                    <Link to='07'>
                        <p className='list-regions-container__region-link'>Кабардино-Балкарская республика</p>
                    </Link>
                </li>
        

            
                <li>
                    <Link to='09'>
                        <p className='list-regions-container__region-link'>Карачаево-Черкесская республика</p>
                    </Link>
                </li>
                

                
                <li>
                    <Link to='05'>
                        <p className='list-regions-container__region-link'>Республика Дагестан</p>
                    </Link>   
                </li>
                

            
                <li>
                    <Link to='06'>
                        <p className='list-regions-container__region-link'>Республика Ингушетия</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='15'>
                        <p className='list-regions-container__region-link'>Республика Северная Осетия — Алания</p>
                    </Link> 
                </li>
                
                
                
                <li>
                    <Link to='26'>
                        <p className='list-regions-container__region-link'>Ставропольский край</p>
                    </Link>
                </li>


                
                <li>
                    <Link to='20'>    
                        <p className='list-regions-container__region-link'>Чеченская республика</p>
                    </Link>     
                </li> 
            
            </ul>
            <button className='list-regions__btn' onClick={showDistrictSKFO} type='button'>&larr;Назад</button> 
        </div> 
        }

        {districtPFO &&
        <div>
            <ul className='list-regions-container__region'>
                
                <li>
                    <Link to='43'>
                        <p className='list-regions-container__region-link'>Кировская область</p>
                    </Link>
                </li>
        

            
                <li>
                    <Link to='52'>
                        <p className='list-regions-container__region-link'>Нижегородская область</p>
                    </Link>
                </li>
                

                
                <li>
                    <Link to='58'>
                        <p className='list-regions-container__region-link'>Пензенская область</p>
                    </Link>   
                </li>
                

            
                <li>
                    <Link to='59'>
                        <p className='list-regions-container__region-link'>Пермский край</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='02'>
                        <p className='list-regions-container__region-link'>Республика Башкортостан</p>
                    </Link> 
                </li>
                
                
                
                <li>
                    <Link to='12'>
                        <p className='list-regions-container__region-link'>Республика Марий Эл</p>
                    </Link>
                </li>


                
                <li>
                    <Link to='13'>    
                        <p className='list-regions-container__region-link'>Республика Мордовия</p>
                    </Link>     
                </li>



                <li>
                    <Link to='16'>    
                        <p className='list-regions-container__region-link'>Республика Татарстан</p>
                    </Link>     
                </li> 



                <li>
                    <Link to='63'>    
                        <p className='list-regions-container__region-link'>Самарская область</p>
                    </Link>     
                </li> 



                <li>
                    <Link to='64'>    
                        <p className='list-regions-container__region-link'>Саратовская область</p>
                    </Link>     
                </li>



                <li>
                    <Link to='18'>    
                        <p className='list-regions-container__region-link'>Удмуртская республика</p>
                    </Link>     
                </li>



                <li>
                    <Link to='73'>    
                        <p className='list-regions-container__region-link'>Ульяновская область</p>
                    </Link>     
                </li>



                <li>
                    <Link to='21'>    
                        <p className='list-regions-container__region-link'>Чувашская республика</p>
                    </Link>     
                </li> 
            
            </ul>
            <button className='list-regions__btn' onClick={showDistrictPFO} type='button'>&larr;Назад</button> 
        </div> 
        }

        {districtYFO &&
        <div>
            <ul className='list-regions-container__region'>
                
                <li>
                    <Link to='45'>
                        <p className='list-regions-container__region-link'>Курганская область</p>
                    </Link>
                </li>
        

            
                <li>
                    <Link to='66'>
                        <p className='list-regions-container__region-link'>Свердловская область</p>
                    </Link>
                </li>
                

                
                <li>
                    <Link to='72'>
                        <p className='list-regions-container__region-link'>Тюменская область</p>
                    </Link>   
                </li>
                

            
                <li>
                    <Link to='86'>
                        <p className='list-regions-container__region-link'>ХМАО - Югра</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='74'>
                        <p className='list-regions-container__region-link'>Челябинская область</p>
                    </Link> 
                </li>
                
                
                
                <li>
                    <Link to='89'>
                        <p className='list-regions-container__region-link'>Ямало-Ненецкий автономный округ</p>
                    </Link>
                </li>
            
            </ul>
            <button className='list-regions__btn' onClick={showDistrictYFO} type='button'>&larr;Назад</button> 
        </div> 
        }

        {districtSFO &&
        <div>
            <ul className='list-regions-container__region'>
                
                <li>
                    <Link to='22'>
                        <p className='list-regions-container__region-link'>Алтайский край</p>
                    </Link>
                </li>
        

            
                <li>
                    <Link to='38'>
                        <p className='list-regions-container__region-link'>Иркутская область</p>
                    </Link>
                </li>
                

                
                <li>
                    <Link to='42'>
                        <p className='list-regions-container__region-link'>Кемеровская область</p>
                    </Link>   
                </li>
                

            
                <li>
                    <Link to='24'>
                        <p className='list-regions-container__region-link'>Красноярский край</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='54'>
                        <p className='list-regions-container__region-link'>Новосибирская область</p>
                    </Link> 
                </li>
                
                
                
                <li>
                    <Link to='55'>
                        <p className='list-regions-container__region-link'>Омская область</p>
                    </Link>
                </li>



                <li>
                    <Link to='04'>
                        <p className='list-regions-container__region-link'>Республика Алтай</p>
                    </Link>
                </li>



                <li>
                    <Link to='17'>
                        <p className='list-regions-container__region-link'>Республика Тыва</p>
                    </Link>
                </li>



                <li>
                    <Link to='19'>
                        <p className='list-regions-container__region-link'>Республика Хакасия</p>
                    </Link>
                </li>



                <li>
                    <Link to='70'>
                        <p className='list-regions-container__region-link'>Томская область</p>
                    </Link>
                </li>
            
            </ul>
            <button className='list-regions__btn' onClick={showDistrictSFO} type='button'>&larr;Назад</button> 
        </div> 
        }

        {districtDFO &&
        <div>
            <ul className='list-regions-container__region'>
                
                <li>
                    <Link to='28'>
                        <p className='list-regions-container__region-link'>Амурская область</p>
                    </Link>
                </li>
        

            
                <li>
                    <Link to='79'>
                        <p className='list-regions-container__region-link'>Еврейская автономная область</p>
                    </Link>
                </li>
                

                
                <li>
                    <Link to='75'>
                        <p className='list-regions-container__region-link'>Забайкальский край</p>
                    </Link>   
                </li>
                

            
                <li>
                    <Link to='41'>
                        <p className='list-regions-container__region-link'>Камчатский край</p>
                    </Link> 
                </li>
                

                
                <li>
                    <Link to='49'>
                        <p className='list-regions-container__region-link'>Магаданская область</p>
                    </Link> 
                </li>
                
                
                
                <li>
                    <Link to='25'>
                        <p className='list-regions-container__region-link'>Приморский край</p>
                    </Link>
                </li>



                <li>
                    <Link to='03'>
                        <p className='list-regions-container__region-link'>Республика Бурятия</p>
                    </Link>
                </li>



                <li>
                    <Link to='14'>
                        <p className='list-regions-container__region-link'>Республика Саха (Якутия)</p>
                    </Link>
                </li>



                <li>
                    <Link to='65'>
                        <p className='list-regions-container__region-link'>Сахалинская область</p>
                    </Link>
                </li>



                <li>
                    <Link to='27'>
                        <p className='list-regions-container__region-link'>Хабаровский край</p>
                    </Link>
                </li>


                <li>
                    <Link to='87'>
                        <p className='list-regions-container__region-link'>Чукотский автономный округ</p>
                    </Link>
                </li>
            
            </ul>
            <button className='list-regions__btn' onClick={showDistrictDFO} type='button'>&larr;Назад</button> 
        </div> 
        }

        <Outlet />
       
    </section>
    );
  }
  
  export default ListRegions;