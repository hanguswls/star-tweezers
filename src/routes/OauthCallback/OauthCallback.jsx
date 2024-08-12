import './OauthCallback.css';
import bigSpinnerIcon from '/spinner_icon_big.png';

function OauthCallback() {
  return (
    <main className='oauth-callback'>
      <img src={bigSpinnerIcon} className='big-spinner' />
      <p>로그인 중이에요...</p>
    </main>
  );
}

export default OauthCallback;