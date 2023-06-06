import React, { useState } from "react";

const allItems = [
  { id: "beaming", value: "😁", isSmile: true },
  { id: "grinning", value: "😀", isSmile: true },
  { id: "squinting", value: "😄", isSmile: true },
  { id: "winking", value: "😉", isSmile: true },
  { id: "sad", value: "😥", isSmile: false },
];

export default function App6() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState(allItems);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function handleClick(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <div>
      <h1>Smileys</h1>
      <div className="loginControl">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>

      <div>
        {isLoggedIn && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <button onClick={() => handleClick(item.id)}>Remove</button>
                <label>
                  {item.value} {item.id}
                </label>
                <input
                  id={`${item.id}-input`}
                  type="text"
                  defaultValue={item.id}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
