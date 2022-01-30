import "./careersearch.css";
import gsap from "gsap";

function CareerSearch() {
  var mouse = { x: 0, y: 0 };

  document.addEventListener(
    "mousemove",
    function (e) {
      mouse.x = e.clientX || e.pageX;
      mouse.y = e.clientY || e.pageY;
      var posX = parseInt(mouse.x - window.innerWidth / 2);
      var posY = parseInt(mouse.y - window.innerHeight / 2);

      gsap.to(".text", 0, {
        textShadow: posX / -150 + "px " + posY / -100 + "px 2px #FE637F",
      });
    },
    false
  );

  return (
    <div className="hero">
      <h3 className="text">
        and i am looking for the next step in my career path
      </h3>
    </div>
  );
}

export default CareerSearch;
