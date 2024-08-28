import Header from "../../components/Header/Header";
import "../LoginPage/LoginPage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage({ setToken }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  return (
    <>
      <Header />

      <section className="login__container">
        <h2 className="login__title">Login</h2>

        <form
          className="login__form"
          onSubmit={async (e) => {
            e.preventDefault();

            setError(null);

            const email = e.target.email.value;
            const password = e.target.password.value;

            if (!email || !password) {
              alert("must fill out all fields");
              return;
            }

            try {
              const { data } = await axios.post("http://localhost:8080/login", {
                email,
                password,
              });

              const { token } = data;

              localStorage.setItem("token", token);
              console.log(data);
              setToken(token);

              setTimeout(() => {
                navigate("/onboarding");
              }, 1500);
            } catch (e) {
              setError(e?.response?.data || "please try again");
            }
          }}
        >
          <input
            className="login__input-email"
            name="email"
            placeholder="Enter email"
          />
          <input
            className="login__input-password"
            name="password"
            placeholder="Enter password"
            type="password"
          />
          <button className="login__button">Sign in</button>
          {error && <div>{error}</div>}
        </form>

        <p className="login__signup">
          New here?{" "}
          <Link to="/signup">
            <span className="login__link">Create an account</span>
          </Link>
        </p>
      </section>
    </>
  );
}
