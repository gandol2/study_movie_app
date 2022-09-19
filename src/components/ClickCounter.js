import React, { useState } from "react";

function ClickCounter(props) {
  const [count, setCount] = useState(0);
  const [timerID, setTimerID] = useState();

  function 시작() {
    // 카운터를 시작
    const 타이머ID = setInterval(function () {
      console.log("타이머 작동중...");
      setCount(function (현재값) {
        return 현재값 + 1;
      });
    }, 100);
    setTimerID(타이머ID);
  }
  function 종료() {
    clearInterval(timerID);
    setTimerID(0);
    // 카운터를 종료
    console.log("종료함수 호출됨");
  }

  return (
    <>
      <div className="container">
        <h2>{props.title}</h2>
        <div>Count : {count}</div>
        <div>타이머의 ID : {timerID}</div>
        <button onClick={시작}>시작</button>
        <button onClick={종료}>종료</button>
      </div>
    </>
  );
}

export default ClickCounter;
