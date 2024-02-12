import React, { useState } from "react";

export default function Container(props) {
  const [heading, setHeading] = useState("this is the container heading");

  function onClick() {
    setHeading("this is now the container heading - new");
  }

  return (
    <div className="container">
      <h3>{heading}</h3>
      <div className="container-main">{props.children}</div>
      <button type="button" onClick={onClick}>
        Change Heading Title
      </button>
    </div>
  );
}
