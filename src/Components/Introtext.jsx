import "./introtext.css";

const Introtext = () => {
  return (
    <>
      <div className="introtext">
        <h3>my different personalities</h3>
        <h4>THE DEVELOPER</h4>
        <p>
          • handles incoming requests like a pro, and never misses a deadline
          even if it was yesterday. <br />
          • always understands clients’ business needs as she is capable of
          reading minds. <br />• delivers only the best as it comes straight
          from her heart. THE CREATIVE MIND
        </p>
        <h4>THE CREATIVE MIND</h4>
        <p>
          • is the queen of unconventional solutions such as picking oranges
          from an apple tree and making the best lemonade you ever tasted.
          <br />
          • wriggles her way out of the most impossible situation with
          resourcefulness and ingenuity – inspired by the one and only MacGyver.
          <br />• builds ideas on the combination of constraints and
          free-thinking like an artist and a scientist in tandem.
        </p>
        <h4>THE EXPLORER</h4>
        <p>
          • thrives in the space of the unknown and conquers the uncharted with
          the help of her sixth sense. <br />
          • she is not afraid to ask for help in case her compass is not
          working.
          <br />• Google is her best friend! Together they could conquer the
          whole wide world.
        </p>
        <h3>a few small projects i've made in the past</h3>
        <h4>pokeapi</h4>
        <p>
          A small React-Typescript based project with redux-toolkit, styled
          components and more...
          <br />
          You can find the{" "}
          <a
            href="https://github.com/nicky456/pokeapi"
            arget="_blank"
            rel="noreferrer"
          >
            repository here
          </a>{" "}
          or{" "}
          <a
            href="https://nicky456.github.io/pokeapi/"
            arget="_blank"
            rel="noreferrer"
          >
            view the app here
          </a>
          .
        </p>
        <h4>what in the world?</h4>
        <p>
          A fancy looking app based on REST Countries API to search and filter
          all the countries in the world
          <br />
          You can find the{" "}
          <a
            href="https://github.com/nicky456/what_in_the_world"
            arget="_blank"
            rel="noreferrer"
          >
            repository here
          </a>{" "}
          or{" "}
          <a
            href="https://nicky456.github.io/what_in_the_world/"
            arget="_blank"
            rel="noreferrer"
          >
            view the app here
          </a>
          .
        </p>
        <h4>you can count on me</h4>
        <p>
          A basic but fancy calculator app...
          <br />
          You can find the{" "}
          <a
            href="https://github.com/nicky456/calculator"
            arget="_blank"
            rel="noreferrer"
          >
            repository here
          </a>{" "}
          or{" "}
          <a
            href="https://nicky456.github.io/calculator/"
            arget="_blank"
            rel="noreferrer"
          >
            view the app here
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Introtext;
