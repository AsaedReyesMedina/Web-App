import React from "react";
import { Grid } from "@mui/material";
import CardCoctelesGrid from "./CardCoctelesGrid";
import DrawerCoctel from "./DrawerCoctel";
function Cocteles() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardCoctelesGrid />
          <DrawerCoctel/>
        </Grid>
      </Grid>
    </>
  );
}

export default Cocteles;
