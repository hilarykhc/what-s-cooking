import "../LoginPage/LoginPage.scss";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/icons/profile.svg";

export default function LoginPage() {
  return (
    <section className="login__container">
      <h2 className="login__title">Login</h2>

      <form className="login__form">
        <input
          className="login__input-username"
          name="username"
          placeholder="Enter username or email"
        />
        <input
          className="login__input-password"
          name="password"
          placeholder="Enter password"
          type="password"
        />
        <button className="login__button">Sign in</button>
      </form>

      {/* <Link> */}
      <p className="login__signup">
        New here?{" "}
        <Link to="/signup">
          <span className="login__link">Create an account</span>
        </Link>
      </p>
      {/* </Link> */}
    </section>
  );
}
