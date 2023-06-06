import React, { useEffect, useState } from "react";

const api = {
  key: "d4487a25399b2f515eb83d921bfb7e50",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App8() {
  const [searchInput, setSearchInput] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getWeatherData() {
      if (!searchCity) return;
      setLoading(true);

      // Process
      try {
        const url = `${api.base}weather?q=${searchCity}&units=metric&appid=${api.key}`;
        const response = await fetch(url);
        console.log(24, response);
        const data = await response.json();
        console.log(26, data);
        if (response.ok) {
          setWeatherInfo(
            `${data.name}, ${data.sys.country} ${data.weather[0].description}, ${data.main.temp}`
          );
          console.log(JSON.stringify(data));
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    }

    getWeatherData();
  }, [searchCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCity(searchInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button>Search</button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {errorMessage ? (
            <div style={{ color: "red" }}>{errorMessage}</div>
          ) : (
            <div>{weatherInfo}</div>
          )}
        </>
      )}
    </>
  );
}

export default App8;
