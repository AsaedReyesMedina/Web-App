import React from "react";
import { Grid } from "@mui/material";
import CardCoctelesGrid from "./CardCoctelesGrid";
import { UseContext } from "../../Hooks/UseContext";
function Cocteles() {
  const { setTitle }: any = React.useContext(UseContext);
  setTitle("Cócteles");
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardCoctelesGrid />
        </Grid>
      </Grid>
    </>
  );
}

export default Cocteles;
