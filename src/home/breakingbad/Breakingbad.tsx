import { Grid } from "@mui/material";
import React from "react";
import { UseContext } from "../../Hooks/UseContext";
import CardListBreakingbad from "./CardListBreakingbad";
const Breakingbad = () => {
  const { setTitle }: any = React.useContext(UseContext);
  setTitle("BrakingBad");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CardListBreakingbad />
      </Grid>
    </Grid>
  );
};

export default Breakingbad;
