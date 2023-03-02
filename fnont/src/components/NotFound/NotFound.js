import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound({}) {

  const navigate = useNavigate();

  //для возврата на предыдушую страницу
  function goBack() {
    navigate('/regions');
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__message">Страница не найдена</p>
      <button className="not-found__btn" type="button" onClick={goBack}>&larr;Назад</button>
    </section>
  );
}

export default NotFound;
