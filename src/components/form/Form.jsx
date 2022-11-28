import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OptionsContainer from "../options-container/OptionsContainer";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

const options = [
  {
    value: "A",
    label: "Lorem ipsum",
    image: "https://api-demo-hh.vercel.app/images/option-a.jpg",
  },
  {
    value: "B",
    label: "Lorem ipsum dolo sit ultrice nunc et massa sed",
    image: "https://api-demo-hh.vercel.app/images/option-b.jpg",
  },
  {
    value: "C",
    label: "Quis mollis nisl",
    image: "https://api-demo-hh.vercel.app/images/option-c.jpg",
  },
];

const NextButton = styled(Button)({
  width: "120px",
  color: "#fff",
  backgroundColor: "#EC7000",
  textTransform: "inherit",
  ": hover": {
    backgroundColor: "#ec862a",
  },
});

const Form = () => {
  // const [step, setStep] = useState(0);

  return (
    <>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h5" component="div">
          Para comenzar seleccioná una de las siguientes opciones
        </Typography>
      </Grid>
      <OptionsContainer options={options} />
      <Grid item xs={12} display="flex" justifyContent="flex-end" mt={1}>
        <Box>
          <NextButton variant="contained">siguiente</NextButton>
        </Box>
      </Grid>
    </>
  );
};

export default Form;
