import PreferenceCard2 from "../../components/PreferenceCard/PreferenceCard2";
import "../PreferencePage/PreferencePage.scss";

export default function PreferencePage() {
  return (
    <>
      <h2 className="preference__title">Select all that applies to you.</h2>
      <form>
        <div className="preference__wrapper">
          <PreferenceCard2 />
        </div>
        <button className="preference__button">Next</button>
      </form>
    </>
  );
}
