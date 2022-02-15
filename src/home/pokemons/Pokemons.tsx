import React from 'react'
import { Grid } from "@mui/material";
import ListPokemons from './ListPokemons';
import useFetch from '../../Hooks/useFetch';
const Pokemons = () => {
    const {data}: any = useFetch(
        `https://pokeapi.co/api/v2/pokemon?limit=25&offset=0`
      );
      const { results }:any = !!data && data;
      console.log(data);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          {
            results === undefined? null: <ListPokemons results={results}/>
          }
        </Grid>
        <Grid item xs={12} md={7}>
          
        </Grid>
      </Grid>
    </>
  )
}

export default Pokemons