import { useNavigate } from 'react-router-dom';
import './Main.css';
import SummaryItem from '../components/List/SummaryItem';

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="profile-wrapper">
        <h4>안녕하세요!</h4>
        <h2>홍길동님</h2>
      </section>
      <section className="summary-list-container">
        <h3>나의 족집게 목록들 (3개)</h3>
        <ul className="summary-list">
          <li onClick={() => { navigate('/record') }}>
            + 새로운 정리 추가
          </li>
          <SummaryItem />
          <SummaryItem />
          <SummaryItem />
        </ul>
      </section>
    </div>
  )
}

export default Main;