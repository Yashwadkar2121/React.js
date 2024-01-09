import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Conveted to Uppercase!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Conveted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear the Text!", "success");
  };
  // const handleCopyClick = () => {
  //   let text = document.getElementById("my-Box");
  //   text.select();
  //   document.getSelection().removeAllRanges();
  //   navigator.clipboard.writeText(text.value);

  //   props.showAlert("Coiped to Clipboard!", "success");
  // };
  // const handleExtraspaces = () => {
  //   let newText = text.split[/[]+/];
  //   setText(newText.join(" "));
  //   props.showAlert("Extra Spaces Removed !", "success");
  // };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text = "new text"; Wrong way to change the state
  //   setText = ("new text") ; Correct way to cahnge the state
  return (
    <>
      <div className="contanier">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading} :-
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            // Added ele.
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {/* Fix the 0 Word count by filter()  Function*/}
          <b>
            {
              text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length
            }
          </b>{" "}
          Words and <b>{text.length}</b> Characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length}
          </b>{" "}
          Read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above to preview it here"}
        </p>
      </div>
    </>
  );
}
