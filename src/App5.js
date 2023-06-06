import React, { useState } from "react";

export default function App5() {
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    username: "Phuc",
    email: "phucdong@gmail.com",
    language: "VN",
    isGoing: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username
    const isUsernameValid =
      formData.username === formData.username.toLowerCase();

    setError(!isUsernameValid ? "Username must be lowercase" : "");
  };

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={formData.username}
            onChange={handleInputChange}
            type="text"
            id="username"
            autoComplete="off"
            name="username"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={handleInputChange}
            type="text"
            id="email"
            autoComplete="off"
            name="email"
          />
        </div>

        <div>
          <label htmlFor="email">Language</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleInputChange}
          >
            <option value="VN">VN</option>
            <option value="EN">EN</option>
            <option value="DE">DE</option>
          </select>
        </div>

        <div>
          <label htmlFor="isGoing">
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
