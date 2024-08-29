import "../PreferenceCard/PreferenceCard.scss";
import preferencesData from "../../data/preferences.json";
import { useState } from "react";

export default function PreferenceCard() {
  const [selectedPreferences, setSelectedPreferences] = useState({
    dietary: new Set(),
    cuisine: new Set(),
    cookingTime: new Set(),
    cookingMethod: new Set(),
  });

  const handleCardClick = (category, id) => {
    console.log(`Card clicked! Category: ${category}, ID: ${id}`);

    setSelectedPreferences((prevSelected) => {
      const newSelected = { ...prevSelected };
      // if (!newSelected[category]) {
      //   newSelected[category] = new Set();
      // }
      if (newSelected[category].has(id)) {
        newSelected[category].delete(id);
      } else {
        newSelected[category].add(id);
      }
      console.log("Updated selection:", newSelected);
      return newSelected;
    });
  };

  return (
    <>
      <div className="preference__card-wrapper">
        <p className="preference__subtitle">1. Dietary Preferences:</p>
        <section className="preference__section">
          {preferencesData.dietary.map((preference) => {
            console.log(preference.name);
            const isSelected = selectedPreferences.dietary.has(preference.id);
            console.log("Is selected:", isSelected);

            return (
              <article
                key={preference.id}
                className={`preference__dietary-card ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => handleCardClick("dietary", preference.id)}
              >
                <p className="preference__dietary-name">{preference.name}</p>
              </article>
            );
          })}
        </section>
      </div>
      <div div className="preference__card-wrapper">
        <p className="preference__subtitle">2. Cuisine Preferences:</p>
        <section className="preference__section">
          {preferencesData.cuisine.map((preference) => {
            console.log(preference.name);
            const isSelected = selectedPreferences.cuisine.has(preference.id);

            return (
              <article
                key={preference.id}
                className={`preference__dietary-card ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => handleCardClick(preference.id)}
              >
                <p className="preference__dietary-name">{preference.name}</p>
              </article>
            );
          })}
        </section>
      </div>
      <div div className="preference__card-wrapper">
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
      <div div className="preference__card-wrapper">
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
