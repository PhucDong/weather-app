import React, { useState } from "react";

function App2() {
  const [formData, setFormData] = useState({
    username: "Phuc Dong",
    email: "dvmp@gmail.com",
    country: "VN",
    gender: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isUsernameLowercase =
      formData.username === formData.username.toLowerCase();

    if (!isUsernameLowercase) {
      setError("Username must be lowercase");
    } else {
      setError("");
    }

    console.log(formData);
  };

  const handleInputValue = (e) => {
    const field = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <p style={{ color: error ? "red" : "black" }}>{error}</p>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputValue}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputValue}
          />
        </div>

        {/* Select country */}
        <div>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputValue}
          >
            <option value="VN">VN</option>
            <option value="AU">AU</option>
            <option value="DE">DE</option>
          </select>
        </div>

        {/* Choose gender */}
        <div>
          <label>Gender:</label>
          <input
            id="male"
            name="gender"
            type="radio"
            value="Male"
            onChange={handleInputValue}
          />
          <label htmlFor="male">Male</label>

          <input
            id="female"
            name="gender"
            type="radio"
            value="Female"
            onChange={handleInputValue}
          />
          <label htmlFor="female">Female</label>

          <input
            id="other"
            name="gender"
            type="radio"
            value="Other"
            onChange={handleInputValue}
          />
          <label htmlFor="other">Other</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App2;
