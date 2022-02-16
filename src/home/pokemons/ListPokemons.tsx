import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import CardPokemons from "./CardPokemons";
import ListPokemon from "./ListPokemon";
const ListPokemons = ({ results }: any) => {
  const [inputValue, setInputValue] = useState("");
  const handdleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handdleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setInputValue(inputValue);
    }
  };
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            Total de pokemons: 1000
          </Typography>
          <form onSubmit={handdleSubmit}>
            <TextField
              onChange={handdleInputChange}
              style={{ marginTop: 25, marginBottom: 25 }}
              id="filled-search"
              label="Busca un pokemon"
              type="search"
              variant="outlined"
              size="small"
            />
          </form>

          {inputValue === "" ? (
            <ListPokemon />
          ) : (
            <CardPokemons inputValue={inputValue} />
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default ListPokemons;
