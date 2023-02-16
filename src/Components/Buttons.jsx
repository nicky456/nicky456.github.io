import "./buttons.css";
import cv from "../img/niki-halasi-szabo-cv.pdf";

const Buttons = () => {
  return (
    <>
      <div className="buttons">
        <a href={cv} target="_blank" rel="noreferrer">
          Download my CV
        </a>
        <a href="https://github.com/nicky456" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </>
  );
};

export default Buttons;
