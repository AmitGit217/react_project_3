import React from "react";
import memeCSS from "./Meme.module.css";

export default function Meme() {
  return (
    <main className={memeCSS.meme}>
      <form className={memeCSS.memeForm}>
        <input
          type="text"
          name="topText"
          className={memeCSS.memeForm__input}
          placeholder="Top Text"
        />
        <input
          type="text"
          name="topText"
          className={memeCSS.memeForm__input}
          placeholder="Bottom Text"
        />
      </form>
      <button className={memeCSS.meme__button}>Get a new meme image 🖼</button>
      <div className={memeCSS.memeImage}>
        <p
          className={`${memeCSS.memeImage__topText} ${memeCSS.memeImage__text}`}
        >
          hello
        </p>
        <p
          className={`${memeCSS.memeImage__bottomText} ${memeCSS.memeImage__text}`}
        >
          world
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
