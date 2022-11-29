import Option from "../option/Option";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const OptionsContainer = ({
  options,
  currentValue,
  onSelect,
  error = false,
}) => {
  if (error) {
    return (
      <Grid item xs={12}>
        <Typography variant="h5" component="div">
          Error al obtener los datos
        </Typography>
      </Grid>
    );
  }
  return (
    <>
      {options.map((option) => (
        <Option
          {...option}
          key={option.value}
          selected={option.value === currentValue}
          onSelect={onSelect}
        />
      ))}
    </>
  );
};

export default OptionsContainer;
