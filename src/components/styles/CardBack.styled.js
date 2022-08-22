import styled from "styled-components";

const CardBackStyled = styled.div`
  position: absolute;
  left: 60%;
  top: 50%;
  background: url(${require("../../images/bg-card-back.png")});
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  width: 80%;
  height: 30%;
  border-radius: 0.8rem;
  -webkit-box-shadow: -13px 22px 30px -16px rgba(66, 68, 90, 1);
  -moz-box-shadow: -13px 22px 30px -16px rgba(66, 68, 90, 1);
  box-shadow: -13px 22px 30px -16px rgba(66, 68, 90, 1);
`;

export default CardBackStyled;
