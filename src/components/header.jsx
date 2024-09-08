import "../App.css";
import logo from "../reactjs-icon-1.png";

function Header(props) {
  return (
    <nav className={props.lightMode ? "light header" : "dark header"}>
      <div className="container">
        <div>
          <img src={logo} alt="" />
          <h1>ReactFacts</h1>
        </div>
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggleLightMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
