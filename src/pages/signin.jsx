import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <section className="signin-wrap">
        <div className="inner">
          <h1>Sign In</h1>
          <article className="input-wrap">
            <form>
              <p>
                <input type="text" placeholder="ID" />
              </p>
              <p>
                <input type="password" placeholder="Password" />
              </p>
              <p className="msg">validation message</p>
              <p className="btn">
                {/* <button className="btn-sign">Sign In</button> */}
                <Link to="/" className="btn-sign">
                  Sign In
                </Link>
              </p>
            </form>
            <p className="btn">
              <Link to="/sign-forgot" className="btn-txt1">
                Forgot password?
              </Link>
            </p>
            <p className="btn">
              <span>Don’t have an account?</span>
              <Link to="/signup" className="btn-txt1">
                Sign Up
              </Link>
            </p>
          </article>
          <article className="social">
            <h2>소셜 계정으로 로그인</h2>
            <div className="btn-wrap">
              <button>G</button>
              <button>F</button>
              <button>K</button>
            </div>
          </article>
          <article className="btn-wrap">
            <Link to="/terms-privacy" className="btn-blt1 fl">
              Privacy Policy
            </Link>
            <Link to="/terms-service" className="btn-blt1 fr">
              Terms of Service
            </Link>
          </article>
        </div>
      </section>
    </>
  );
};

export default Signin;
