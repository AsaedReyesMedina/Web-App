import { Grid } from "@mui/material";
import React from "react";
import CardListBreakingbad from "./CardListBreakingbad";
const Breakingbad = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CardListBreakingbad />
      </Grid>
    </Grid>
  );
};

export default Breakingbad;
