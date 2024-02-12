import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import styles from "./App.module.css";

import classNames from "classnames/bind";

import Button from "./components/Button";
import Container from "./components/Container";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);

  const cx = classNames.bind(styles);

  const buttonClass = cx("red-background", "white-color", "black-color", true && "true-color", {
    "new-class-1": true,
    "new-class-2": false,
    "new-class-3": true
  });

  const hold = useRef({ name: "holding name" });

  useEffect(()=>{
    console.log(hold.current);
  }, [hold.current]);

  const onPressMeClicked = () => {
    console.log("press me clicked!")

    hold.current = { name: "something new" };
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      <button type="button" className={buttonClass} onClick={onPressMeClicked}>
        Press Me!
      </button>

      <Container>
        <h4>I'm a child element of the container</h4>
        <Button></Button>
        <div>{ import.meta.env.VITE_TEST ?? "not here"}</div>
      </Container>

      <List></List>
    </div>
  );
}

export default App;
