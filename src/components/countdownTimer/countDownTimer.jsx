import React, { useEffect, useState } from "react";

export const CountDownTimer = () => {
  const [start, setStart] = useState(true);
  const [timerInput, setTimerInput] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  const [intervalID, setIntervalID] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const intervalFunction = () => {
    if (timerInput.second) {
      setTimerInput({ ...timerInput, second: timerInput.second - 1 });
    } else if (!timerInput.second && timerInput.minute) {
      setTimerInput({
        ...timerInput,
        minute: timerInput.minute - 1,
        second: 59,
      });
    } else {
      setTimerInput({
        ...timerInput,
        hour: timerInput.hour - 1,
        minute: 59,
        second: 59,
      });
    }

    if (!timerInput.hour && !timerInput.minute && !timerInput.second) {
      clearInterval(intervalID);
      setStart(true);
      setTimerInput({ hour: "", minute: "", second: "" });
      alert("Time's up!");
    }
  };

  useEffect(() => {
    let interval;
    if (!start && !isPaused) {
      interval = setInterval(intervalFunction, 1000);
      setIntervalID(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, timerInput, isPaused]);

  const onChange = (e) => {
    const { id, value } = e.target;
    if (id === "hour") {
      setTimerInput({ ...timerInput, hour: Number(value) });
    } else if (id === "minute") {
      setTimerInput({ ...timerInput, minute: Number(value) });
    } else {
      setTimerInput({ ...timerInput, second: Number(value) });
    }
  };

  const onReset = () => {
    setTimerInput({ hour: 0, minute: 0, second: 0 });
    setStart(true);
    setIsPaused(false);
  };

  function replaceIdleSpaceWithZero(number) {
    if (number === "") {
      return "00";
    } else if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }
  return (
    <div>
      <h1>Countdown Timer</h1>
      {start ? (
        <div>
          <input type="text" placeholder="HH" onChange={onChange} id="hour" />
          <input type="text" placeholder="MM" onChange={onChange} id="minute" />
          <input type="text" placeholder="SS" onChange={onChange} id="second" />
          <button onClick={() => setStart(false)}>START</button>
        </div>
      ) : (
        <div>
          <h1>
            <span> {replaceIdleSpaceWithZero(timerInput.hour)}</span>:
            <span>{replaceIdleSpaceWithZero(timerInput.minute)}</span>:
            <span>{replaceIdleSpaceWithZero(timerInput.second)}</span>
          </h1>
          <button onClick={onReset}>RESET</button>
          <button
            onClick={() => {
              setIsPaused((prev) => !prev);
            }}
          >
            {isPaused ? "RESUME" : "PAUSE"}
          </button>
        </div>
      )}
    </div>
  );
};
