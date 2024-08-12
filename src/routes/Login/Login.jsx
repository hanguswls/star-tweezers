import './Login.css';
import logo from '/logo.png';
import kakaoLogin from '/kakao_login.png';

function Login() {

  return (
    <main className='login'>
      <img className='login-logo' src={logo}/>
      <section className='login-content'>
        <div className='login-title'>
          <p>별집게</p>
          <p>PLAYGROUND</p>
        </div>
        <p className='login-subtitle'>나의 시험 요약 튜터</p>
      </section>
      <section className='login-btns'>
        <button className='kakao-btn'>
          <img src={kakaoLogin} />
        </button>
        <button className='inquiry-btn'>
          <span>문의하기</span>
        </button>
      </section>
    </main>
  );
}

export default Login;
