import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./App1";
import reportWebVitals from "./reportWebVitals";
//import StarRating from "./StarRating";
//import { useState } from "react";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating}></StarRating>
//       <p>This is my rating {movieRating}</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>

  // <React.StrictMode>
  //   <StarRating
  //     maxRating={4}
  //     messages={["terrible", "bad", "good", "vary good", "amazing"]}
  //   />
  //   <StarRating
  //     maxRating={15}
  //     color="red"
  //     size={23}
  //     className="test"
  //     defalultRating={3}
  //   />
  //   <Test></Test>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
