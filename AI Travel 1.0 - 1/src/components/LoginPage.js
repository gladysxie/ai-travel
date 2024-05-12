import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNeedAnAccountClick = useCallback(() => {
    // Please sync "Register Page" to the project
  }, []);

  return (
    <div className="login-page">
      <main className="left-column">
        <section className="content">
          <div className="text4">
            <h1 className="sign-in">Sign in</h1>
            <div className="please-login-to">
              Please login to continue to your account.
            </div>
          </div>
          <div className="form">
            <div className="input">
              <a
                className="jonas-kahnwaldgmailcom"
                href="mailto:jonas_kahnwald@gmail.com"
                target="_blank"
              >
                jonas_kahnwald@gmail.com
              </a>
              <div className="m">|</div>
              <div className="label">
                <div className="email">Email</div>
              </div>
            </div>
            <div className="input1">
              <input className="password" placeholder="Password" type="text" />
              <img className="eye-off-icon" alt="" src="/eyeoff.svg" />
            </div>
            <div className="keep">
              <input className="square" type="checkbox" />
              <div className="keep-me-logged">Keep me logged in</div>
            </div>
            <button className="button" onClick={onButtonClick}>
              <div className="sign-in1">Sign in</div>
            </button>
            <div className="or">
              <img
                className="or-child"
                loading="lazy"
                alt=""
                src="/vector-11.svg"
              />
              <div className="or1">or</div>
              <img
                className="enter-password-icon"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <button className="button1">
              <div className="sign-in-with">Sign in with Google</div>
              <img className="plus-icon" alt="" src="/plus.svg" />
            </button>
          </div>
          <div
            className="need-an-account-container"
            onClick={onNeedAnAccountClick}
          >
            <span>{`Need an account? `}</span>
            <span className="create-one">{`Create one `}</span>
          </div>
          <img
            className="image-3-icon"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
