import React, { useState, useEffect } from "react";

export default function List() {
  const [fullList, setFullList] = useState([]);

  const addToFullList = () => {
    setFullList((currList) => [...currList, Math.round(Math.random() * 1000)]);
  };

  useEffect(() => {
    console.log("fullList has changed");
    // setFullList([]);
  }, [fullList]);

  return (
    <div className="full-list">
      <div className="list">
        {fullList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="buttons">
        <button type="button" onClick={addToFullList}>
          Add Random Number to List
        </button>
      </div>
    </div>
  );
}
