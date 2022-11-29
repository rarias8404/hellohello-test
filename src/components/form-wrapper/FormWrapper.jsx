import React from "react";
import Grid from "@mui/material/Grid";
import ProfileCard from "../profile-card/ProfileCard";
import Form from "../form/Form";

const FormWrapper = () => {
  return (
    <Grid container spacing={12.5}>
      <Grid container item xs={12} md={6}>
        <Form />
      </Grid>
      <Grid item xs={12} md={6}>
        <ProfileCard />
      </Grid>
    </Grid>
  );
};

export default FormWrapper;
