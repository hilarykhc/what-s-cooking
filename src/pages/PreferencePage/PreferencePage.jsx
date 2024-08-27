import PreferenceCard from "../../components/PreferenceCard/PreferenceCard";
import "../PreferencePage/PreferencePage.scss";

export default function PreferencePage() {
  return (
    <>
      <h2>Select all that applies to you.</h2>
      <form>
        <div>
          <PreferenceCard />
        </div>
      </form>
    </>
  );
}
