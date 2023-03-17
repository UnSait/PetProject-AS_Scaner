import './Successfully.css';
import { useNavigate } from 'react-router-dom';


function Successfully({}) {

  const navigate = useNavigate();

  //для возврата на предыдушую страницу
  function goBack() {
    navigate('/regions');
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">Успешно!</h2>
      <p className="not-found__message">Данные были обновлены.</p>
      <button className="not-found__btn" type="button" onClick={goBack}>&larr;Назад</button>
    </section>
  );
}

export default Successfully;
