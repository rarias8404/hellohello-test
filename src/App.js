import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, styled, ThemeProvider } from "@mui/material";
import FormWrapper from "./components/form-wrapper/FormWrapper";

const theme = createTheme({
  typography: {
    h5: {
      color: "#252220",
    },
    body2: {
      color: "#252220",
    },
  },
  palette: {
    text: {
      primary: "#5D5750",
      secondary: "#89837F",
    },
  },
});

const CustomContainer = styled(Container)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "100px",
});

const BoxContainer = styled(Box)({
  display: "flex",
  width: "860px",
  height: "100%",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomContainer>
        <BoxContainer>
          <FormWrapper />
        </BoxContainer>
      </CustomContainer>
    </ThemeProvider>
  );
}

export default App;
