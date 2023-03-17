import './Failed.css';
import { useNavigate } from 'react-router-dom';


function Failed({}) {

  const navigate = useNavigate();

  //для возврата на предыдушую страницу
  function goBack() {
    navigate('/regions');
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">Ошибка!</h2>
      <p className="not-found__message">При сохранении данных произошла ошибка. Попробуйте еще раз. Если ошибка сохраняется - обратитесь к администратору.</p>
      <button className="not-found__btn" type="button" onClick={goBack}>&larr;Назад</button>
    </section>
  );
}

export default Failed;
