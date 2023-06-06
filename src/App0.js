import React, { useState } from "react";
import "./App.css";

// function Button({ size, bgColor, children }) {
//   !size ? (size = "") : (size = `btn-${size}`);
//   !bgColor ? (bgColor = "") : (bgColor = `btn-${bgColor}`);

//   console.log(children);
//   return <button className={`btn ${size} ${bgColor}`}>{children}</button>;
// }

// function App0() {
//   return (
//     <>
//       <Button size="lg" bgColor="success">
//         Success
//       </Button>
//       <Button bgColor="danger">Danger</Button>
//       <Button size="sm" bgColor="warning">
//         Warning
//       </Button>
//     </>
//   );
// }

function App0() {
  const [like, setLike] = useState(1);
  const [blog, setBlog] = useState({
    content: "CoderSchool is amazing",
    count: 0,
  });

  const handleClick = (schoolName) => {
    console.log(schoolName);
    // setLike(1 - like);
    setBlog({ ...blog, count: blog.count + 1 });
  };

  return (
    <div>
      <p>{blog.content}</p>
      <h1 onClick={() => handleClick("CoderSchool")}>
        {like === 1 ? "👍" : "👎"} {blog.count}
      </h1>
      {/* <h1 onClick={handleClick} style={{ color: like === 1 ? "red" : "black" }}>
        ❤
      </h1> */}
    </div>
  );
}

export default App0;
