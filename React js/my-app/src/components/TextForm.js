import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the Text");
  //   text = "new text"; Wrong way to change the state
  //   setText = ("new text") ; Correct way to cahnge the state
  return (
    <>
      <div>
        <h1>{props.heading} :-</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3 ">
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(" ").length}</b> Words and <b>{text.length}</b>{" "}
          Characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
