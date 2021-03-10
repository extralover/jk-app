import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="signup-wrap">
      <div className="inner">
        <h1>Sign Up</h1>
        <article className="input-wrap">
          <form>
            <p>
              <input type="text" placeholder="ID" />
            </p>
            <p>
              <input type="email" placeholder="E-mail" />
            </p>
            <p>
              <input type="password" placeholder="Password" />
            </p>
            <p>
              <input type="checkbox" id="agree1" />
              <label htmlFor="agree1">agree terms</label>
            </p>
            <p className="msg">validation message</p>
            <p className="btn">
              {/* <button className="btn-sign">Sign In</button> */}
              <Link to="/" className="btn-sign">
                Sign Up
              </Link>
            </p>
          </form>
          <p className="btn">
            <span>Already have an account?</span>
            <Link to="/signin" className="btn-txt1">
              Sign In
            </Link>
          </p>
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
  );
};

export default Signup;
