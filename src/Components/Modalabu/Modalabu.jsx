import React from "react";
import "./Modalabu.scss";

function Modalabu({ modal, setmodal }) {
  const [active, setActive] = React.useState(false);

  const handleLoginClick = () => {
    setActive(false);
  };

  const handleRegisterClick = () => {
    setActive(true);
  };

  return (
    <div
      className={`modal ${modal ? "modal--open" : ""}`}
      onClick={(evt) => {
        if (evt.target.matches(".modal")) {
          setmodal(false);
        }
      }}
    >
      <div id="modal-sing" className={`modal-sing ${active ? "active" : ""}`}>
        <div className="form-container sign-up">

          <form>
            <button className="button__modal" onClick={() => setmodal(false)}>
              X
            </button>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <button className="button__modal_2" onClick={() => setmodal(false)}>
              X
            </button>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className="hidden"
                id="register"
                onClick={handleRegisterClick}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-left">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modalabu;
