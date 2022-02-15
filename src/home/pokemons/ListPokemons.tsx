import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { TextField } from "@mui/material";
import {
  Pagination,
  Card,
  CardContent,
  CardMedia,
  List,
  Stack,
  Typography,
} from "@mui/material";
import useToggleDrawer from "../../Hooks/useToggleDrawer";
import PokemonDetails from "./PokemonDetails";
const ListPokemons = ({ results }: any) => {
  const initialId = "https://pokeapi.co/api/v2/pokemon/1/";
  const {open,toggleDrawer,id} = useToggleDrawer();
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            Total de pokemons: 1000
          </Typography>
          <form >
        <TextField
        style={{marginTop:25,marginBottom:25}}
          id="filled-search"
          label="Buscar"
          type="search"
          variant="outlined"
          size="small"
        />
        </form>
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
            {results.map(({ name, url }: any, index: number) => (
              <ListItemButton key={index} onClick={toggleDrawer(true,url)} >
                <ListItemText primary={name} />
                <ListItemAvatar>
                  <CardMedia
                    component="img"
                    height="50"
                    width="50"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png`}
                    alt={name}
                  />
                </ListItemAvatar>
              </ListItemButton>
            ))}
          </List>
          <Stack style={{marginTop:10}} spacing={2} justifyContent="center" alignItems="center">
            <Pagination
              count={40}
              variant="outlined"
              shape="rounded"
              size="small"
            />
          </Stack>
        </CardContent>
      </Card>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false,initialId)}
        onOpen={toggleDrawer(true,initialId)}
      >
        <PokemonDetails url={id}/>
      </SwipeableDrawer>
    </>
  );
};

export default ListPokemons;
