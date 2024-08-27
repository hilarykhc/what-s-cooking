import "../PreferenceCard/PreferenceCard.scss";
import preferencesData from "../../data/preferences.json";

export default function PreferenceCard() {
  return (
    <>
      <div>
        <p className="preference__subtitle">1. Dietary Preferences:</p>
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
      </div>
      <div>
        <p className="preference__subtitle">2. Cuisine Preferences:</p>
        <section className="preference__section">
          {preferencesData.cuisine.map((preference) => {
            console.log(preference.name);

            return (
              <article key={preference.id} className="preference__dietary-card">
                <p className="preference__dietary-name">{preference.name}</p>
              </article>
            );
          })}
        </section>
      </div>
      <div>
        <p className="preference__subtitle">3. Meal Prep Time:</p>
        <section className="preference__section">
          {preferencesData.cookingTime.map((preference) => {
            console.log(preference.name);

            return (
              <article key={preference.id} className="preference__dietary-card">
                <p className="preference__dietary-name">{preference.name}</p>
              </article>
            );
          })}
        </section>
      </div>
      <div>
        <p className="preference__subtitle">4. Cooking Methods:</p>
        <section className="preference__section">
          {preferencesData.cookingMethod.map((preference) => {
            console.log(preference.name);

            return (
              <article key={preference.id} className="preference__dietary-card">
                <p className="preference__dietary-name">{preference.name}</p>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
}
