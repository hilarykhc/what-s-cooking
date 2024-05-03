import logo from "../../assets/Logo4.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [refresh, setRefresh] = useState(false);

  const refreshPage = () => {
    setRefresh(true);
  };

  useEffect(() => {
    if (refresh) {
      window.location.reload();
    }
  }, [refresh]);

  //   const refreshPage = () => {
  //     window.location.reload();
  //   };

  return (
    <div>
      <Link to="/" className="header__link" onClick={refreshPage}>
        <img className="header__img" src={logo}></img>
      </Link>
    </div>
  );
}
