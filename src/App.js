import "./Calculator.css";
import { useState } from "react";

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function App() {
  let [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    // e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const decimalClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "×"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
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
          {calc.num ? calc.num : calc.res}
        </div>
        <div className="button-box">
          <button
            className={isDarkMode ? "num" : "light num"}
            value={7}
            onClick={numClickHandler}
          >
            7
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            value={8}
            onClick={numClickHandler}
          >
            8
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            value={9}
            onClick={numClickHandler}
          >
            9
          </button>
          <button
            className={isDarkMode ? "operation" : "light operation"}
            value={"+"}
            onClick={signClickHandler}
          >
            +
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            value={4}
            onClick={numClickHandler}
          >
            4
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            value={5}
            onClick={numClickHandler}
          >
            5
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            value={6}
            onClick={numClickHandler}
          >
            6
          </button>
          <button
            className={isDarkMode ? "operation" : "light operation"}
            value={"-"}
            onClick={signClickHandler}
          >
            -
          </button>

          <button
            className={isDarkMode ? "num" : "light num"}
            value={1}
            onClick={numClickHandler}
          >
            1
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            value={2}
            onClick={numClickHandler}
          >
            2
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            value={3}
            onClick={numClickHandler}
          >
            3
          </button>
          <button
            className={isDarkMode ? "operation" : "light operation"}
            value={"×"}
            onClick={signClickHandler}
          >
            ×
          </button>

          <button
            className={isDarkMode ? "num" : "light num"}
            value={"."}
            onClick={decimalClickHandler}
          >
            .
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            value={0}
            onClick={numClickHandler}
          >
            0
          </button>
          <button
            className={isDarkMode ? "num" : "light num"}
            value={"+/-"}
            onClick={invertClickHandler}
          >
            +/-
          </button>
          <button
            className={isDarkMode ? "operation" : "light operation"}
            value={"/"}
            onClick={signClickHandler}
          >
            /
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
            onClick={equalsClickHandler}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
