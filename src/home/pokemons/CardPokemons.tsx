import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useToggleDrawer from "../../Hooks/useToggleDrawer";
import { CardMedia, ListItemAvatar } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import useFetch from "../../Hooks/useFetch";
import PokemonDetails from "./PokemonDetails";
const CardPokemons = ({ inputValue = "Pikachu" }: any) => {
  const initialId = `https://pokeapi.co/api/v2/pokemon/pikachu`;
  const pokemon = inputValue.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const { data }: any = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const { open, toggleDrawer, id } = useToggleDrawer();
  const {name,sprites} = !!data && data;
  return (
    <>
      {data?(
        <List
        sx={{
          width: "100%",
          position: "relative",
          overflow: "auto",
          maxHeight: 420,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
          <ListItemButton  onClick={toggleDrawer(true, url)}>
            <ListItemText primary={name} />
            <ListItemAvatar>
              <CardMedia
                component="img"
                height="50"
                width="50"
                image={sprites.front_default}
                alt={name}
              />
            </ListItemAvatar>
          </ListItemButton>
      </List>
      ):null
        }
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false, initialId)}
        onOpen={toggleDrawer(true, initialId)}
      >
        <PokemonDetails url={id} />
      </SwipeableDrawer>
    </>
  );
};

export default CardPokemons;
