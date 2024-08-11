import logoImage from '/logo.png';

function Header() {
  return (
    <header>
      <button className="button">
        로그아웃
      </button>
      <span className="logo-wrapper">
        <img src={logoImage} alt="logo-image" />
        별집게 Playground
      </span>
    </header>
  )
}

export default Header;