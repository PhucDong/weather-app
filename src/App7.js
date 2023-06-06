import React, { useState, useEffect } from "react";
function RepeatMessage({ message }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  });

  return <div>Logging to console {message}</div>;
}

function App7() {
  console.log("Rendering");
  // const getLanguage = () => {
  //   console.log("Get language from local storage");
  //   return window.localStorage.getItem("language") || "";
  // };

  const [language, setLanguage] = useState(() => {
    return window.localStorage.getItem("language") || "";
  });

  const [count, setCount] = useState(() => {
    return Number(window.localStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    console.log("Run side effect of language");
    window.localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    console.log("Run side effect of count");
    window.localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    console.log("Change title");
    document.title = "Intro to useEffect";
  }, []);

  return (
    <>
      <div>
        <label htmlFor="language">Favorite language: </label>
        <input
          id="language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        />
        {language ? (
          <div>{`Your favorite language is ${language}`}</div>
        ) : (
          <div>Please type your favorite language</div>
        )}
      </div>
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {/* <RepeatMessage message={language} /> */}
    </>
  );
}

export default App7;
