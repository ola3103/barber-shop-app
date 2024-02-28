import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <form className="sign_in_form" action="">
      <div className="form_container">
        <h1 className="form_header">Sign in here</h1>
        <label className="form_label">
          Email
          <input className="form_input" type="email" />
        </label>
        <label className="form_label">
          Password
          <input className="form_input" type="password" />
        </label>
        <button className="form_btn">SIGN IN</button>
        <p className="form_text">
          Don&apos;t have an account ?
          <Link className="form_link" to="/sign-up">
            Create account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignIn;
