import styled from "styled-components";

const MainStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85vw;
  height: 80vh;
  -webkit-box-shadow: -3px 10px 21px -10px rgba(66, 68, 90, 1);
  -moz-box-shadow: -3px 10px 21px -10px rgba(66, 68, 90, 1);
  box-shadow: -3px 10px 21px -10px rgba(66, 68, 90, 1);
  border-radius: 0.8rem;
  overflow: hidden;
`;

export default MainStyled;
