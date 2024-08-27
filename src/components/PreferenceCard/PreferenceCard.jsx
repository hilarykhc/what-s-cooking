import "../PreferenceCard/PreferenceCard.scss";
import preferencesData from "../../data/preferences.json";

export default function PreferenceCard() {
  return (
    <>
      <p>1. Dietary Preferences:</p>
      <section className="preference__section">
        {preferencesData.dietary.map((preference) => {
          console.log(preference.name);

          return (
            <article key={preference.id} className="preference__dietary-card">
              <p className="preference__dietary-name">{preference.name}</p>
            </article>
          );
        })}
      </section>
    </>
  );
}
