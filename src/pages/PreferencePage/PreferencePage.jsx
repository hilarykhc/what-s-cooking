import PreferenceCard from "../../components/PreferenceCard/PreferenceCard";
import "../PreferencePage/PreferencePage.scss";

export default function PreferencePage() {
  return (
    <>
      <h2 className="preference__title">Select all that applies to you.</h2>
      <form>
        <div className="preference__wrapper">
          <PreferenceCard />
        </div>
        <button className="preference__button">Next</button>
      </form>
    </>
  );
}
