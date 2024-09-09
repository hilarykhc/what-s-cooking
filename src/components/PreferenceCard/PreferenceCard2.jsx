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
  //   console.table(preferencesData.cuisine);

  const handleCardClick = (category, id) => {
    console.log(`Card clicked! Category: ${category}, ID: ${id}`);

    setSelectedPreferences((prevSelected) => {
      const newSelectedCategory = new Set(prevSelected[category]);

      if (newSelectedCategory.has(id)) {
        newSelectedCategory.delete(id);
      } else {
        newSelectedCategory.add(id);
      }
      console.log("Updated selection:", newSelectedCategory);
      return {
        ...prevSelected,
        [category]: newSelectedCategory,
      };
    });
  };

  //   useEffect(() => {
  //     console.log("Selected preferences updated:", selectedPreferences);
  //   }, [selectedPreferences]);

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
      <div className="preference__card-wrapper">
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
                onClick={() => handleCardClick("cuisine", preference.id)}
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
            const isSelected = selectedPreferences.cookingTime.has(
              preference.id
            );

            return (
              <article
                key={preference.id}
                className={`preference__dietary-card ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => handleCardClick("cookingTime", preference.id)}
              >
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
            const isSelected = selectedPreferences.cookingMethod.has(
              preference.id
            );

            return (
              <article
                key={preference.id}
                className={`preference__dietary-card ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => handleCardClick("cookingMethod", preference.id)}
              >
                <p className="preference__dietary-name">{preference.name}</p>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
}
