import React, { memo } from "react";
import Typography from "@mui/material/Typography";
import IconSuccess from "../../assets/icon-success.svg";
import Box from "@mui/material/Box";

const FormHeader = ({ step }) => {
  const renderText = () => {
    switch (step) {
      case 0:
        return "Para comenzar seleccioná una de las siguientes opciones.";
      case 1:
        return "Para terminar completá el siguiente formulario.";
      default:
        return "Gracias por completar nuestro formulario";
    }
  };

  return (
    <Box mb={5}>
      {step === 2 && <img src={IconSuccess} alt="success" />}
      <Typography variant="h5" component="div" fontSize="28px" fontWeight={700}>
        {renderText()}
      </Typography>
    </Box>
  );
};

export default memo(FormHeader);
