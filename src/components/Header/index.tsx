import { useContext } from "react";
import AppContext from "../../Contexts/AppContext";

import "./header.style.css";
import ToggleLang from "../ToggleLang";

import profile from "../../profile.json";

const Header = () => {
  const { getTranslate } = useContext(AppContext);

  return (
    <div
      className="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${profile.images.cover})`,
      }}
    >
      <ToggleLang />
      <div className="header--content">
        <img
          src={profile.images.profile}
          alt="photo_perfil"
          className="header--image"
        />
        <div className="header--info">
          <h1 className="header--title">{profile.name}</h1>
          <p className="header-description">{getTranslate.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
