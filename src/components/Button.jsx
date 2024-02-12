import React, { useEffect } from "react";

export default function Button() {
  useEffect(() => {
    console.log("in Button useEffect - mounting");
  }, []);

  function handleClick() {
    console.log("you clicked the button!");
  }

  return (
    <button type="button" onClick={handleClick}>
      Button Component
    </button>
  );
}
