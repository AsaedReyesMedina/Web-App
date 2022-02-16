import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { CardMedia,Stack,Pagination, } from "@mui/material";
import useToggleDrawer from "../../Hooks/useToggleDrawer";
import PokemonDetails from "./PokemonDetails";
import useFetch from "../../Hooks/useFetch";
import ImgPokemon from "./ImgPokemon";
const ListPokemon = () => {
  const { open, toggleDrawer, id } = useToggleDrawer();
  const [page, setPage] = useState(0);
  const initialId = "https://pokeapi.co/api/v2/pokemon/1/";
  const {data}: any = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${page}`
  );
  const { results }:any = !!data && data;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    if(value===1){
      setPage(0);
    }else{
      setPage(((value -1) * 50)-1);
    }
      
  };
  return (
    <>
      <List
        sx={{
          width: "100%",
          position: "relative",
          bgcolor: "background.paper",
          overflow: "auto",
          maxHeight: 420,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {results?(
          results.map(({ name, url }: any, index: number) => (
            <ListItemButton key={index} onClick={toggleDrawer(true, url)}>
              <ListItemText primary={name} />
              <ListItemAvatar>
                <ImgPokemon url={url}/>
              </ListItemAvatar>
            </ListItemButton>
          ))
        ):null
       }
      </List>
      <Stack
            style={{ marginTop: 10 }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Pagination
              count={20}
              variant="outlined"
              shape="rounded"
              size="small"
              onChange={handleChange}
            />
          </Stack>
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

export default ListPokemon;
