import './RequestLimit.css';
import { useNavigate } from 'react-router-dom';

function RequestLimit({}) {

  const navigate = useNavigate();

  //для возврата на предыдушую страницу
  function goBack() {
    navigate('/regions');
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">429</h2>
      <p className="not-found__message">Превышен лимит запросов (допускается совершать не более 2 запросов с одного IP-адреса в минуту). Попробуйте позже.</p>
      <button className="not-found__btn" type="button" onClick={goBack}>&larr;Назад</button>
    </section>
  );
}

export default RequestLimit;
