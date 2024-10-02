import React, { useReducer } from "react";

import "./Input.css";

export default function Input(props) {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };
  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return state + 1;

      case "MINUS":
        return state - 1;

      default:
        return state;
    }
  }
  const [count, setCount] = useReducer(reducer, 0);
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={props.className}
        onChange={onChangeHandler}
      />
    );

  return <div>{element}</div>;
}
