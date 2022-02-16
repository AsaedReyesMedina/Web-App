import React from 'react'
import { Grid } from "@mui/material";
import ListPokemons from './ListPokemons';
const Pokemons = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          
             <ListPokemons />
          
        </Grid>
        <Grid item xs={12} md={7}>
          
        </Grid>
      </Grid>
    </>
  )
}

export default Pokemons