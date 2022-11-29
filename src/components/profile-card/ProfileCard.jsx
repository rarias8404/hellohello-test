import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

// images
import UserAvatar from "../../assets/image.jpg";
import IconHome from "../../assets/icon-home.svg";
import IconCard from "../../assets/icon-card.svg";

const CustomCardContent = styled(CardContent)({
  position: "relative",
  backgroundColor: "#F9FAFB",
});

const CustomCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "center",
});

const CustomButton = styled(Button)({
  textTransform: "inherit",
  width: "95%",
  color: "#106EB0",
  marginBottom: "20px",
});

const HomeAvatar = styled(Box)({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "-30px",
  height: "64px",
  width: "64px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  boxShadow: "0px 1px 4px rgba(86, 80, 76, 0.04)",
});

const ProfileCard = () => {
  return (
    <Card
      sx={{ maxWidth: 370, boxShadow: "0px 2px 16px rgba(86, 80, 76, 0.04)" }}
    >
      <CardMedia component="img" image={UserAvatar} alt="user" />
      <CustomCardContent>
        <HomeAvatar>
          <img src={IconHome} alt="Home" />
        </HomeAvatar>
        <Box mt={4}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize="20px"
            fontWeight={700}
          >
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body2" fontWeight={400}>
            Lobortis dolore aliquyam ut ipsum no amet sanctus duo magna ut et
          </Typography>
          <Box pt={1} display="flex" gap={1} alignItems="center">
            <img src={IconCard} alt="icon card" />
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
          <Box pt={1} display="flex" gap={1} alignItems="center">
            <img src={IconCard} alt="icon card" />
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
        </Box>
      </CustomCardContent>
      <CustomCardActions>
        <CustomButton variant="outlined">lo quiero ya</CustomButton>
      </CustomCardActions>
    </Card>
  );
};

export default ProfileCard;
