import "./Search.scss";

export default function Search() {
  return (
    <div className="search">
      <h2 className="search__title">Search by ingredients:</h2>
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Enter ingredients with a single comma in between (e.g. lettuce,egg,pepper)"
        ></input>

        <button className="search__btn">What's Cooking?</button>
      </form>
    </div>
  );
}
