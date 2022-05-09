import React from "react";
import headerCSS from "./Header.module.css";
import trollFace from "../../images/trollFace.png";

export default function Header() {
  return (
    <header className={headerCSS.header}>
      <div className={headerCSS.headerLogo}>
        <img
          className={headerCSS.headerLogo__image}
          src={trollFace}
          alt="troll face"
        />
        <h1 className={headerCSS.headerLogo__title}>Meme Generator</h1>
      </div>
      <h2 className={headerCSS.header__subtitle}>React Course - Project 3</h2>
    </header>
  );
}
