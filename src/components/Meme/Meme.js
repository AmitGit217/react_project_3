import React from "react";
import memeCSS from "./Meme.module.css";
import { useState } from "react";

export default function Meme() {
  const [memeText, setMemeText] = useState({
    topText: "",
    bottomText: "",
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    setMemeText((preText) => ({
      ...preText,
      [name]: value,
    }));
  };
  return (
    <main className={memeCSS.meme}>
      <form className={memeCSS.memeForm}>
        <input
          type="text"
          name="topText"
          className={memeCSS.memeForm__input}
          placeholder="Top Text"
          value={memeText.topText}
          onChange={inputChange}
        />
        <input
          type="text"
          name="bottomText"
          className={memeCSS.memeForm__input}
          placeholder="Bottom Text"
          value={memeText.bottomText}
          onChange={inputChange}
        />
      </form>
      <button className={memeCSS.meme__button}>Get a new meme image 🖼</button>
      <div className={memeCSS.memeImage}>
        <p
          className={`${memeCSS.memeImage__topText} ${memeCSS.memeImage__text}`}
        >
          {memeText.topText}
        </p>
        <p
          className={`${memeCSS.memeImage__bottomText} ${memeCSS.memeImage__text}`}
        >
          {memeText.bottomText}
        </p>
        <img
          className={memeCSS.memeImage__image}
          src="https://imgflip.com/s/meme/Blank-Comic-Panel-1x2.png"
          alt="meme"
        />
      </div>
    </main>
  );
}
