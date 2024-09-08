
import "../App.css";
import logo from "../reactjs-icon-1.png";

function Header() {
  return (
    <div className='header'>
      <div className="container">
          <div>
            <img src={logo} alt=""  />
            <h1>ReactFacts</h1>
          </div>

      </div>
    </div>
  );
}

export default Header;
