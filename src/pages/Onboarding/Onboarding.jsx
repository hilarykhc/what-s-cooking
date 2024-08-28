import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import "../Onboarding/Onboarding.scss";
import { NavLink, Link } from "react-router-dom";

export default function Onboarding({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      getProfile();
    } else {
      setUser(null);
    }
  }, [token]);

  async function getProfile() {
    try {
      const { data } = await axios.get("http://localhost:8080/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data);
    } catch (e) {
      console.log("Failed to retrieve profile. Please log in again.", e);
    }
  }

  return (
    <>
      <h1 className="onboarding__title">What's Cooking?</h1>
      <Header />
      {user ? (
        <>
          <h2 className="success__title">You're all set, {user.username}! </h2>
          <Link to="/preference">
            <button className="success__button">Start Cooking</button>
          </Link>
        </>
      ) : (
        <section className="onboarding">
          <p className="onboarding__text">
            Fridge Raider, Kitchen Savior. Waste less and enjoy more.
          </p>

          <div className="onboarding__button-container">
            <NavLink to="/preference">
              <button className="onboarding__button">Skip</button>
            </NavLink>
            <NavLink to="/login">
              <button className="onboarding__button">Login</button>
            </NavLink>
          </div>

          <p className="login__signup">
            New here?{" "}
            <NavLink to="/signup">
              <span className="login__link">Create an account</span>
            </NavLink>
          </p>
        </section>
      )}
    </>
  );
}
