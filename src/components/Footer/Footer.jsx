import './Footer.css';
import spinnerIcon from '/spinner_icon.png';

function Footer(params) {
  return (
    <footer>
      <button className="button primary">
        출제하기
      </button>
      <span className="loading">
        <img src={spinnerIcon} alt="" className="spinner" />
        저장중이예요...
      </span>
    </footer>
  )
}

export default Footer