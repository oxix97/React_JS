import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { SET_COMPONENT } from "../MVC/AVALON_Reducer";
import { GameContext } from "../Store";

export default function Timer_test(props) {
  const [minutes, setMinutes] = useState(props.minutes);
  const [seconds, setSeconds] = useState(props.seconds);
  const { gameState, dispatch } = useContext(GameContext);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          dispatch({ type: SET_COMPONENT, component: props.component });
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div className="App">
      <h1>CountDown!</h1>
      <div>
        <h2>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      </div>
    </div>
  );
}
