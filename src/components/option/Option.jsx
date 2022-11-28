import Box from "@mui/material/Box";
import ArrowIcon from "../../assets/icon-chevron-right.svg";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const BoxOption = styled(Box)({
  padding: 24,
  display: "flex",
  alignItems: "center",
  gap: 16,
  boxShadow: "0px 8px 16px rgba(86, 80, 76, 0.14)",
  cursor: "pointer",
  /*":hover": {
    border: "2px solid #EC7000",
    cursor: "pointer",
  },*/
});

const Img = styled("img")({
  borderRadius: "5px",
  height: "40px",
  width: "60px",
});

const Option = ({ value, label, image, selected = false }) => {
  return (
    <BoxOption sx={{ border: selected ? "2px solid #EC7000" : "inherit" }}>
      <Box display="flex" alignItems="center" gap={1} width="85%">
        <Img src={image} alt="option" />
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </Box>
      <img src={ArrowIcon} alt="arrow" />
    </BoxOption>
  );
};

export default Option;
