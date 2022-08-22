import styled from "styled-components";

const AsideStyled = styled.div`
  position: relative;
  background: url(${require("../../images/bg-main-desktop.png")}) center / cover
    no-repeat;
  width: 30%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export default AsideStyled;
