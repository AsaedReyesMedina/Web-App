import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const ListPokemons = (results:any) => {
  
  return (
    <>
      {results? results.map((reults:any) => (
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemButton>
      )):null
    }
    </>
  );
};

export default ListPokemons;
