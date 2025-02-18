import "./buttons.css";
import cv from "../img/nikolett-halasi-szabo-cv.pdf";

const Buttons = () => {
  return (
    <>
      <div className="buttons">
        <a href={cv} target="_blank" rel="noreferrer">
          Download my CV
        </a>
      </div>
    </>
  );
};

export default Buttons;
