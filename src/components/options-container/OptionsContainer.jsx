import Option from "../option/Option";
import Grid from "@mui/material/Grid";

const OptionsContainer = ({ options, currentValue = "B" }) => {
  return (
    <>
      {options.map((option) => (
        <Grid key={option.value} item xs={12}>
          <Option {...option} selected={option.value === currentValue} />
        </Grid>
      ))}
    </>
  );
};

export default OptionsContainer;
