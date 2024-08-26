import Header from "../../components/Header/Header";
import "../SuccessPage/SuccessPage.scss";

export default function SuccessPage() {
  return (
    <>
      <Header />
      <h2 className="success__title">You're all set!</h2>
      <button className="success__button">Start Cooking</button>
    </>
  );
}
