import React from "react";
import { Grid } from "@mui/material";
import CardCoctelesGrid from "./CardCoctelesGrid";
function Cocteles() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardCoctelesGrid />
        </Grid>
      </Grid>
    </>
  );
}

export default Cocteles;
