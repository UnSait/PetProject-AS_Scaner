import './DescriptionContainer.css';
import { Link } from 'react-router-dom';

function DescriptionContainer() {    
    return (
    <section className='description-container'>
        <div className='description-container__discription'>
            <h2 className='description-container__title'>Описание</h2>
            <h2 className='description-container__subtitle'>Для чего это</h2>
            <p className='description-container__text'>Данное приложение было создано с целью автоматизации и упрощения мониторинга соблюдения законодательства владельцами AS. Выбрав нужный регион,
            пользователь за несколько секунд получит актуальную информацию о новых и "ушедших" AS, что значительно ускорит процесс мониторинга. Вся информация хранится в базе данных, что позволяет, при необходимости, 
            проводить необходимую аналитику и не беспокоиться за ее сохранность.</p>
            <h2 className='description-container__subtitle'>Как это работает</h2>
            <p className='description-container__text'>По запросу пользователя приложение копирует актуальный список AS с ресурса ididb.ru и сравнивает его с сохраненным ранее списком AS. 
            Полученный результат обновляет сохраненный ранее список AS и при следующем запросе актуальный список AS будет сравниваться с ним. Обработка данных регионов, где зарегистрировано большое количеством AS, может идти несколько минут.</p>
            <p className='description-container__text'> Большая просьба давать обратную связь по опыту использования приложения, оставлять свои предложения и замечания (контакты указаны ниже).</p>
        </div>
        <Link to='/regions'>
            <button className='description-container__btn' type='button'>Перейти к работе&rarr;</button>
        </Link>
    </section>
    );
  }
  
  export default DescriptionContainer;