import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };

  const handleUpClick = (event) => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick=(event)=>{
    // console.log("Lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  };
  const handleClearClick=(event)=>{
    // console.log("ClearText was clicked"+text);
    let newText=("");
    setText(newText);
  };
  const handleSpaceClick=(event)=>{
    // console.log("Clear ExtraSpace was clicked"+text);
    let newText = text.trim().split(/ +/).join(' ');
    setText(newText);
  };
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      {/* Using props function with h1 tag for heading  */}
      <div className="mb-3">
        {/* <label for="My Box" class="form-label">Example textarea</label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="My Box"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to upperCase
      </button>

      <button className="btn btn-primary mx-2 " onClick={handleDownClick}>
        Convert to LowerCase
      </button>
     
      <button className="btn btn-primary mx-2 " onClick={handleClearClick}>
        Clear Text
      </button>

      <button className="btn btn-primary mx-2 " onClick={handleSpaceClick}>
        Remove ExtraSpace
      </button>
    </div>

    <div className="container my-3">

      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  );
}
