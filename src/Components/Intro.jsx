import "./intro.css";
import ParallaxMousemove from "react-parallax-mousemove";
import { useState } from "react";
import intro from "../img/intro.png";

function Intro() {
  var [x, setX] = useState(490);

  function slideX(event) {
    setX(event.clientX);
  }

  const style = {
    outterLeft: {
      width: `calc(100% - ${x / 10}%)`,
      height: "90vh",
      position: "relative",
      float: "left",
      overflow: "hidden",
    },
    outterRight: {
      width: "100%",
      height: "90vh",
      position: "relative",
      float: "right",
      overflow: "hidden",
    },

    inner: {
      width: "100vw",
      height: "90vh",
      position: "absolute",
      margin: "auto",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: "center",
    },

    explorerTextbox: {
      position: "absolute",
      left: "5%",
      top: "5%",
      width: "300px",
    },

    coderTextbox: {
      position: "absolute",
      right: "5%",
      top: "5%",
      width: "300px",
    },

    header: {
      fontFamily: "Montserrat",
      color: "black",
      fontSize: "40px",
      marginTop: "35px",
      letterSpacing: "0.3em",
      fontWeight: 600,
    },
    paragraph: {
      fontFamily: "Montserrat",
      fontSize: "20px",
      color: "black",
      letterSpacing: "0.62px",
      lineHeight: "30px",
      fontWeight: 300,
    },

    infoLayerStyle: {
      position: "relative",
      marginTop: "-60px",
    },
    bgLayerStyle: {
      position: "absolute",
      height: "90vh",
    },

    bgLayerStyleRight: {
      position: "absolute",
      right: 0,
      height: "90vh",
    },
    photo: {
      height: "90vh",
      margin: "auto",
    },
  };

  return (
    <div className="intro" onMouseMove={slideX}>
      <div className="intro-min">
        <img src={intro} alt="intro" />
        <div className="left">
          <h2 style={style.header}>explorer</h2>
          <p style={style.paragraph}>
            Love to explore and conquer areas that are yet unfamiliar to me.
          </p>
        </div>
        <div className="right">
          <h2 style={style.header}>coder</h2>
          <p style={style.paragraph}>
            Love to write clean, efficient,modern and well structured codes.
          </p>
        </div>
      </div>
      <div className="intro-full">
        <div className="coder">
          <ParallaxMousemove
            containerStyle={style.outterRight}
            fullHeight={false}
          >
            <ParallaxMousemove.Layer
              layerStyle={style.bgLayerStyleRight}
              config={{
                xFactor: 0.25,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30,
                },
              }}
            >
              <img
                src={require("../img/code_bg.png")}
                alt="Parallax Layer"
                style={{ height: "100%", marginLeft: "5%" }}
              ></img>
            </ParallaxMousemove.Layer>
            <div style={style.inner}>
              <img
                className="photo"
                src={require("../img/niki_1.png")}
                alt="Parallax Layer"
              ></img>
              <div style={style.coderTextbox}>
                <h2 style={style.header}>coder</h2>
                <p style={style.paragraph}>
                  Love to write clean, efficient,modern and well structured
                  codes.
                </p>
              </div>
            </div>
          </ParallaxMousemove>
        </div>
        <div className="explorer">
          <ParallaxMousemove
            containerStyle={style.outterLeft}
            fullHeight={false}
          >
            <ParallaxMousemove.Layer
              layerStyle={style.bgLayerStyle}
              config={{
                xFactor: 0.25,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30,
                },
              }}
            >
              <img
                src={require("../img/multi-color-powder-explosion-white-background.jpg")}
                alt="Parallax Layer"
              ></img>
            </ParallaxMousemove.Layer>
            <div style={style.inner}>
              <img
                className="photo"
                src={require("../img/niki_bw.png")}
                alt="Parallax Layer"
              ></img>
              <div style={style.explorerTextbox}>
                <h2 style={style.header}>explorer</h2>
                <p style={style.paragraph}>
                  Love to explore and conquer areas that are yet unfamiliar to
                  me.
                </p>
              </div>
            </div>
          </ParallaxMousemove>
        </div>
      </div>
      <h1 className="text">hi, i'm niki</h1>
    </div>
  );
}

export default Intro;
