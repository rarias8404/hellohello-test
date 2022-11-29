import Option from "../option/Option";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
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
        <Box height="100%">
          <Typography gutterBottom variant="h5" component="div">
            Error al obtener los datos
          </Typography>
        </Box>
      </Grid>
    );
  }
  return (
    <>
      {options.map((option) => (
        <Grid key={option.value} item xs={12}>
          <Option
            {...option}
            selected={option.value === currentValue}
            onSelect={onSelect}
          />
        </Grid>
      ))}
    </>
  );
};

export default OptionsContainer;
