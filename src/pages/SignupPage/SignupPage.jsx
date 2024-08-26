import "../SignupPage/SignupPage.scss";

export default function SignupPage() {
  return (
    <>
      <h2 className="sign-up__title">Create an account.</h2>
      <form className="sign-up__form">
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
          <p className="sign-up__text">confirm password:</p>
          <input
            className="sign-up__input sign-up__input-password"
            name="password"
            placeholder="Confirm password"
            type="password"
          />
          <p className="sign-up__text">upload an avatar:</p>
          <input
            className="sign-up__input sign-up__input-avatar"
            name="avatar"
            placeholder="Enter url (e.g. https://www...)"
          />

          <button className="sign-up__button">Next</button>
        </div>
      </form>
    </>
  );
}
