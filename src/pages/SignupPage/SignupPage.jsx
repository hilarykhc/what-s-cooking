import "../SignupPage/SignupPage.scss";

export default function SignupPage() {
  return (
    <>
      <h2>Create an account.</h2>
      <form className="login__form">
        <p>username:</p>
        <input
          className="login__input-username"
          name="username"
          placeholder="Enter username"
        />
        <p>email:</p>
        <input
          className="login__input-password"
          name="username"
          placeholder="Enter email"
        />
        <p>password:</p>
        <input
          className="login__input-username"
          name="password"
          placeholder="Enter password"
        />
        <p>confirm password:</p>
        <input
          className="login__input-password"
          name="password"
          placeholder="Confirm password"
          type="password"
        />

        <button className="login__button">Next</button>
      </form>
    </>
  );
}
