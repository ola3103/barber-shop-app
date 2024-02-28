import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <form className="sign_in_form" action="">
      <div className="form_container">
        <h1 className="form_header">Get Started</h1>
        <p className="form_subtitle">Create your account now</p>
        <label className="form_label">
          Full name
          <input className="form_input" type="text" />
        </label>
        <label className="form_label">
          Email
          <input className="form_input" type="email" />
        </label>
        <label className="form_label">
          Password
          <input className="form_input" type="password" />
        </label>
        <button className="form_btn">CREATE ACCOUNT</button>
        <p className="form_text">
          Already have an account ?
          <Link className="form_link" to="/sign-in">
            Sign in here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
