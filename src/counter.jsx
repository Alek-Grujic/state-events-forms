import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function data() {
    const today = new Date();
    today.setDate(today.getDate() + count);

    if (count === 0) {
      return `Today is ${today.toDateString()} `;
    }
    if (count > 0) {
      return `${count} days from today is ${today.toDateString()} `;
    }
    if (count < 0) {
      return `${Math.abs(count)} ago was ${today.toDateString()}`;
    }
  }

  return (
    <div className="counterWrapper">
      <div>
        <button
          className="counterButton"
          onClick={() => setStep((step) => step - 1)}
        >
          -
        </button>
        <span className="spanEl">Step: {step}</span>
        <button
          className="counterButton"
          onClick={() => setStep((step) => step + 1)}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="counterButton"
          onClick={() => setCount(count - step)}
        >
          -
        </button>
        <span className="spanEl">Count: {count}</span>
        <button
          className="counterButton"
          onClick={() => setCount(count + step)}
        >
          +
        </button>
      </div>
      <span className="spanEl">{data()}</span>
    </div>
  );
}

export default Counter;
