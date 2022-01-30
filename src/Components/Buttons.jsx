import "./buttons.css";

const Buttons = () => {
  return (
    <>
      <div className="contact">
        <p>Feel free to contact me at</p>
        <p>
          <a href="mailto:sznici@gmail.com"> sznici@gmail.com</a>
        </p>
      </div>
      <div className="buttons">
        <a
          href="https://nicky456.github.io/calculator/"
          target="_blank"
          rel="noreferrer"
        >
          You can count on me
        </a>
        <a
          href="https://nicky456.github.io/what_in_the_world/"
          target="_blank"
          rel="noreferrer"
        >
          What in the World!?
        </a>
        <a
          href="https://drive.google.com/drive/folders/1Snlm5fm1WFOWjaOHRA36Jr9fJv1zXDAP?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
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
