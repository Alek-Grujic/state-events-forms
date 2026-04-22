import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   function data() {
//     const today = new Date();
//     today.setDate(today.getDate() + count);

//     if (count === 0) {
//       return `Today is ${today.toDateString()} `;
//     }
//     if (count > 0) {
//       return `${count} days from today is ${today.toDateString()} `;
//     }
//     if (count < 0) {
//       return `${Math.abs(count)} ago was ${today.toDateString()}`;
//     }
//   }

//   return (
//     <div className="counterWrapper">
//       <div>
//         <button
//           className="counterButton"
//           onClick={() => setStep((step) => step - 1)}
//         >
//           -
//         </button>
//         <span className="spanEl">Step: {step}</span>
//         <button
//           className="counterButton"
//           onClick={() => setStep((step) => step + 1)}
//         >
//           +
//         </button>
//       </div>
//       <div>
//         <button
//           className="counterButton"
//           onClick={() => setCount(count - step)}
//         >
//           -
//         </button>
//         <span className="spanEl">Count: {count}</span>
//         <button
//           className="counterButton"
//           onClick={() => setCount(count + step)}
//         >
//           +
//         </button>
//       </div>
//       <span className="spanEl">{data()}</span>
//     </div>
//   );
// }

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

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
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span className="spanEl"> {step}</span>
      </div>

      <div>
        <button
          className="counterButton"
          onClick={() => setCount(count - step)}
        >
          -
        </button>
        <input
          type="number"
          value={count}
          placeholder="0"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          className="counterButton"
          onClick={() => setCount(count + step)}
        >
          +
        </button>
      </div>

      <span className="spanEl">{data()}</span>

      {(count !== 0 || step !== 1) && (
        <button
          className="counterButton"
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          RESET
        </button>
      )}
    </div>
  );
}

export default Counter;
