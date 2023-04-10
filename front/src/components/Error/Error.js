import './Error.css';
import { useNavigate } from 'react-router-dom';


function Error({}) {

  const navigate = useNavigate();

  //для возврата на предыдушую страницу
  function goBack() {
    navigate('/regions');
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">Упс!</h2>
      <p className="not-found__message">Возникла непредвиденная ошибка, обратитесь к администратору.</p>
      <button className="not-found__btn" type="button" onClick={goBack}>&larr;Назад</button>
    </section>
  );
}

export default Error;
