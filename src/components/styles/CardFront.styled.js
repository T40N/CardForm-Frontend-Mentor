import styled from "styled-components";

const CardFrontStyled = styled.div`
  position: absolute;
  left: 45%;
  top: 10%;
  background: url(${require("../../images/bg-card-front.png")});
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  width: 80%;
  height: 30%;
  border-radius: 0.8rem;
  -webkit-box-shadow: -13px 22px 30px -16px rgba(66, 68, 90, 1);
  -moz-box-shadow: -13px 22px 30px -16px rgba(66, 68, 90, 1);
  box-shadow: -13px 22px 30px -16px rgba(66, 68, 90, 1);
  display: flex;
  justify-content: center;
`;

export default CardFrontStyled;
