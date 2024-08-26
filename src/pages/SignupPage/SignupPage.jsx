import { useState } from "react";
import axios from "axios";
import "../SignupPage/SignupPage.scss";

export default function SignupPage() {
  const [signedup, setSignedup] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <h2 className="sign-up__title">Create an account.</h2>
      <form
        className="sign-up__form"
        onSubmit={async (e) => {
          e.preventDefault();

          setError(null);
          setSignedup(false);

          const username = e.target.username.value;
          const email = e.target.email.value;
          const password = e.target.password.value;
          const avatar = e.target.avatar.value;

          if (!username || !email || !password || !avatar) {
            alert("please fill out all fields");
            return;
          }

          try {
            await axios.post("http://localhost:8080/signup", {
              username,
              email,
              password,
              avatar,
            });
            setSignedup(true);
          } catch (e) {
            console.log(e);
            setError(e?.response?.data);
          }
        }}
      >
        <div className="sign-up__container">
          <p className="sign-up__text">username:</p>
          <input
            className="sign-up__input sign-up__input-username"
            name="username"
            placeholder="Enter username"
          />
          <p className="sign-up__text">email:</p>
          <input
            className="sign-up__input sign-up__input-email"
            name="email"
            placeholder="Enter email"
          />
          <p className="sign-up__text">password:</p>
          <input
            className="sign-up__input sign-up__input-password"
            name="password"
            placeholder="Enter password"
            type="password"
          />
          {/* <p className="sign-up__text">confirm password:</p>
          <input
            className="sign-up__input sign-up__input-password"
            name="password"
            placeholder="Confirm password"
            type="password"
          /> */}
          <p className="sign-up__text">upload an avatar:</p>
          <input
            className="sign-up__input sign-up__input-avatar"
            name="avatar"
            placeholder="Enter url (e.g. https://www...)"
          />

          <button className="sign-up__button">Next</button>
          {signedup && <div>Sign up successful, please log in</div>}
          {error && <div>{error}</div>}
        </div>
      </form>
    </>
  );
}
