import Header from "../../components/Header/Header";
import "../Onboarding/Onboarding.scss";
import { Link } from "react-router-dom";

export default function Onboarding() {
  return (
    <>
      <h1 className="onboarding__title">What's Cooking?</h1>
      <Header />
      <section className="onboarding">
        {/* <h1 className="onboarding__title">What's Cooking?</h1> */}
        <p className="onboarding__text">
          Fridge Raider, Kitchen Savior. Waste less and enjoy more
        </p>

        <div className="onboarding__button-container">
          <button className="onboarding__button">Skip</button>
          <Link to="/login">
            <button className="onboarding__button">Login</button>
          </Link>
        </div>

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
