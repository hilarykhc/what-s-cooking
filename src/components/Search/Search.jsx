import { useState } from "react";
import "./Search.scss";

export default function Search() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiKey = "5afd69213342467db7b59c337dc52561";
    const baseUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;

    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Can't find recipes:", error);
    }
  };

  return (
    <div className="search">
      <h2 className="search__title">Search by ingredients:</h2>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Enter ingredients with a comma in between (e.g. lettuce,egg,pepper)"
          value={ingredients}
          onChange={handleInputChange}
        ></input>

        <button className="search__btn" type="submit">
          What's Cooking?
        </button>
      </form>

      <div className="search__results">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="search__recipe">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
