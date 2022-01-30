import { slideInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";

const SkillBar = (props) => {
  const { bgcolor, completed, label } = props;

  const slideInLeftAnimation = keyframes`${slideInLeft}`;
  const SlideInLeftDiv = styled.div`
    animation: 2s ${slideInLeftAnimation};
  `;

  const containerStyles = {
    height: "25px",
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: "5px",
    overflow: "hidden",
  };

  const fillerStyles = {
    height: "25px",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
  };

  return (
    <div className="skill" style={containerStyles}>
      <SlideInLeftDiv>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${label}`}</span>
        </div>
      </SlideInLeftDiv>
    </div>
  );
};

export default SkillBar;
