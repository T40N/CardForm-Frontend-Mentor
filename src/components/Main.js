import { ThemeProvider } from "styled-components";
import Aside from "./Aside";
import { MainStyled } from "./styles";
import FormSection from "./FormSection";

const theme = {
  colors: {
    primary: "linear-gradient(hsl(249, 99%, 64%) 0%, hsl(278, 94%, 30%) 100%)",
    red: "hsl(0, 100%, 66%)",
    white: "hsl(0, 0%, 100%)",
    lightViolet: "hsl(270, 3%, 87%)",
    darkViolet: "hsl(279, 6%, 55%)",
    veryDarkViolet: "hsl(278, 68%, 11%)",
  },
};

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainStyled>
        <Aside />
        <FormSection />
      </MainStyled>
    </ThemeProvider>
  );
};

export default Main;
