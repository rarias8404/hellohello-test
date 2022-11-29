import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import OptionsContainer from "../options-container/OptionsContainer";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OptionsContainerSkeleton from "../options-container-skeleton/OptionsContainerSkeleton";
import FormHeader from "../form-header/FormHeader";
import { FormControl, FormLabel } from "@mui/material";

import { validateEmail } from "../../helpers";

const NextButton = styled(Button)({
  width: "120px",
  color: "#fff",
  backgroundColor: "#EC7000",
  textTransform: "inherit",
  ": hover": {
    backgroundColor: "#ec862a",
  },
});

const EmailTextField = styled(TextField)({
  borderRadius: 5,
  "& .MuiInput-underline:after": {
    borderBottomColor: "#EC7000",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#EC7000",
    },
    "&:hover fieldset": {
      borderColor: "#EC7000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EC7000",
    },
  },
});

const Form = () => {
  const [step, setStep] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://api-demo-hh.vercel.app/api/options"
        );
        setOptions(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchOptions();
  }, []);

  const handleChangeEmail = (event) => {
    setValidEmail(true);
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    if (validateEmail(email)) {
      const {
        data: { error },
      } = await axios.post(
        `https://api-demo-hh.vercel.app/api/send?email=${email}&option=${selectedOption}`
      );
      if (!error) {
        setStep(2);
        setEmail("");
        setSelectedOption("");
      }
    } else {
      setValidEmail(false);
    }
  };

  const handleSelect = (value) => setSelectedOption(value);

  const handleClick = () => {
    if (step === 1) {
      handleSubmit();
    } else if (step === 2) {
      setStep(0);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <FormHeader step={step} />
      </Grid>
      {loading ? (
        <OptionsContainerSkeleton />
      ) : (
        <>
          {step === 0 && (
            <OptionsContainer
              options={options}
              currentValue={selectedOption}
              onSelect={handleSelect}
              error={!!error}
            />
          )}
          {step === 1 && (
            <FormControl fullWidth>
              <FormLabel htmlFor="email" sx={{ marginBottom: 2 }}>
                Correo electrónico
              </FormLabel>
              <EmailTextField
                value={email}
                id="email"
                size="small"
                onChange={handleChangeEmail}
                error={!validEmail}
                helperText={
                  !validEmail &&
                  "Por favor, ingresá un correo electrónico válido"
                }
              />
            </FormControl>
          )}
        </>
      )}
      <Grid item xs={12} display="flex" justifyContent="flex-end" mt={1}>
        <Box>
          <NextButton
            variant="contained"
            disabled={(loading || !selectedOption) && step !== 2}
            onClick={handleClick}
          >
            {step === 0 ? "siguiente" : step === 1 ? "enviar" : "volver"}
          </NextButton>
        </Box>
      </Grid>
    </>
  );
};

export default Form;
