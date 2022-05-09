import React from "react";
import memeCSS from "./Meme.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Meme() {
  const [memeText, setMemeText] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/3lmzyx.jpg",
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setMemeText((preText) => ({
      ...preText,
      [name]: value,
    }));
  };
  const [memes, setMemes] = useState([]);
  // API for our memes
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  const getRandomMeme = () => {
    const randomNumber = Math.floor(Math.random() * memes.length);
    const url = memes[randomNumber].url;
    setMemeText((preValue) => ({
      ...preValue,
      image: url,
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
      <button onClick={getRandomMeme} className={memeCSS.meme__button}>
        Get a new meme image 🖼
      </button>
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
          src={memeText.image}
          alt="meme"
        />
      </div>
    </main>
  );
}
