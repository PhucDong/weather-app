import React, { useState } from "react";

// Render machanism
// - Mount => run functions in useState => render => update DOM
// - Update => re-render => update DOM

function App1() {
  // const [like, setLike] = useState(1);
  // const [blog, setBlog] = useState({
  //   content: "React is awesome",
  //   count: 0,
  // });

  // const handleClick = (name) => {
  //   console.log(name);
  //   // setLike(1 - like);
  //   setBlog({ ...blog, count: blog.count + 1 });
  // };

  const [formData, setFormData] = useState({
    username: "Phuc Dong",
    email: "dvmp1014@gmail.com",
    language: "VN",
    isGoing: false,
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUsernameValid =
      formData.username === formData.username.toLowerCase();
    if (!isUsernameValid) {
      setError("Username must be lowercase");
    } else {
      setError("");
    }
  };

  const handleInputChange = (e) => {
    // console.log(e);
    const field = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (field === "username") {
      const isUsernameValid = value === value.toLowerCase();
      setError(!isUsernameValid ? "Username must be lowercase" : "");
    }

    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      {/* <p>{blog.content}</p>
      <h1 onClick={() => handleClick("Hello")}>
        {like === 1 ? "👍" : "👎"} {blog.count}
      </h1>
      <h1
        onClick={() => setLike(1 - like)}
        style={{ color: like === 1 ? "red" : "black" }}
      >
        hello
      </h1> */}
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={formData.username}
            onChange={handleInputChange}
            id="username"
            name="username"
            type="text"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={handleInputChange}
            id="email"
            name="email"
            type="text"
            autoComplete="off"
          />
        </div>
        <div>
          <label>
            Language
            <select
              name="language"
              value={formData.language}
              onChange={handleInputChange}
            >
              <option value="VN">VN</option>
              <option value="EN">EN</option>
              <option value="DE">DE</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <input
              id="isGoing"
              name="isGoing"
              type="checkbox"
              checked={formData.isGoing}
              onChange={handleInputChange}
            />
            Is going?
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App1;
