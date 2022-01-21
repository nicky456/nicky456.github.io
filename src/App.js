import "./Calculator.css";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const resetClickHandler = () => {
    setCalc("");
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className={isDarkMode ? "calc-app" : " light calc-app"}>
      <div className={isDarkMode ? "calculator" : "light calculator"}>
        <label class="switch">
          <input type="checkbox" onClick={handleThemeChange} />
          <span class={isDarkMode ? "slider" : "light slider"}></span>
        </label>
        <div
          className={isDarkMode ? "screen" : "light screen"}
          mode="single"
          max={70}
        >
          {calc ? calc : "0"}
        </div>
        <div className="button-box">
          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("7")}
          >
            7
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("8")}
          >
            8
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("9")}
          >
            9
          </button>
          <button
            className={isDarkMode ? "operation" : "light operation"}
            onClick={deleteLast}
          >
            ←
          </button>

          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("4")}
          >
            4
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("5")}
          >
            5
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("6")}
          >
            6
          </button>
          <button
            className={isDarkMode ? "operation" : "light operation"}
            onClick={() => updateCalc("+")}
          >
            +
          </button>

          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("1")}
          >
            1
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("2")}
          >
            2
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("3")}
          >
            3
          </button>
          <button
            className={isDarkMode ? "operation" : "light operation"}
            onClick={() => updateCalc("-")}
          >
            -
          </button>

          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc(".")}
          >
            .
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            onClick={() => updateCalc("0")}
          >
            0
          </button>
          <button
            className={isDarkMode ? "operation" : "light operation"}
            onClick={() => updateCalc("/")}
          >
            /
          </button>
          <button
            className={isDarkMode ? "operation" : "light operation"}
            onClick={() => updateCalc("*")}
          >
            ×
          </button>
          <button
            className={isDarkMode ? "reset" : "light reset"}
            value={"RESET"}
            onClick={resetClickHandler}
          >
            RESET
          </button>
          <button
            className={isDarkMode ? "equals" : "light equals"}
            value={"="}
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
