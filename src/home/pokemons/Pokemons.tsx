import React from "react";
import { Grid } from "@mui/material";
import ListPokemons from "./ListPokemons";
import { UseContext } from "../../Hooks/UseContext";
const Pokemons = () => {
  const { setTitle }: any = React.useContext(UseContext);
  setTitle("Pokemons");
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <ListPokemons />
        </Grid>
      </Grid>
    </>
  );
};

export default Pokemons;
