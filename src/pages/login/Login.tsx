import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/simsimlogo/logo.png";
import "./login.scss";
const Login: React.FC = () => {
  const history = useNavigate();
  const [data, setData] = React.useState({
    password: "",
    login: "",
  });
  const phone = false;
  // const [password, setPassword] = React.useState(false);
  const loginChange = (el: string) => {
    setData((prev) => ({ password: prev.password, login: el }));
  };
  const passwordChange = (el: string) => {
    setData((prev) => ({ password: el, login: prev.login }));
  };

  const hendelSubmit = () => {
    localStorage.setItem("user", JSON.stringify(data));
    history("/admin/1-koshe/1");
  };
  return (
    <div className="loginin">
      <div className="loginin__items">
        <div className="loginin__items__container">
          <h2 className="loginin__items__container__h2">Login</h2>
          <div className="loginin__items__container__title">
            <img src={Logo} alt="" />
          </div>

          <form
            className="loginin__items__container__body"
            onSubmit={hendelSubmit}
          >
            <label>
              <span>login</span>
              <input
                type="text"
                placeholder="login"
                onChange={(el) => loginChange(el.target.value)}
              />
              {phone ? <p>telefon nomerdi duris kiritin'</p> : <p></p>}
            </label>
            <label>
              <span>password</span>
              <input
                type="password"
                placeholder="password"
                onChange={(el) => passwordChange(el.target.value)}
              />
            </label>
            <div className="loginin__items__container__body__btn">
              <button
                className={`loginin__items__container__body__btn__button }`}
              >
                submit
              </button>
            </div>
          </form>

          <div className="loginin__items__container__bottom">
            <Link to="/">sim-sim</Link>
            <Link to="/signup">sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
