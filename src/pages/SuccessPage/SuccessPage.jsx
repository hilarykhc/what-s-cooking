import Header from "../../components/Header/Header";
import "../SuccessPage/SuccessPage.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <>
      <Header />
      <h2 className="success__title">You're all set! </h2>
      <Link to="/preference">
        <button className="success__button">Start Cooking</button>
      </Link>
    </>
  );
}
