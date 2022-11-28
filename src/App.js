import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";
import FormWrapper from "./components/form-wrapper/FormWrapper";

const CustomContainer = styled(Container)({
  backgroundColor: "#F9FAFB",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BoxContainer = styled(Box)({
  display: "flex",
  width: "70%",
  height: "70%",
});

function App() {
  return (
    <CustomContainer>
      <BoxContainer>
        <FormWrapper />
      </BoxContainer>
    </CustomContainer>
  );
}

export default App;
