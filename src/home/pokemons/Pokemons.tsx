import React from "react";
import { Grid } from "@mui/material";
import ListPokemons from "./ListPokemons";
import useFetch from "../../Hooks/useFetch";

const Pokemons = () => {
  const { data }: any = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`
  );
  const { results }: any = !!data && data;
  console.log(results);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ListPokemons results={results} />
        </Grid>
      </Grid>
    </>
  );
};

export default Pokemons;
