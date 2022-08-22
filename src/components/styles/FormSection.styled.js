import styled from "styled-components";

const FormSectionStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 70%;
  height: 100%;
`;

export default FormSectionStyled;
