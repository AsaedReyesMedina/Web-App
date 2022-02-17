import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CardCoctel from "./CardCoctel";
import useToggleDrawer from "../../Hooks/useToggleDrawer";
interface bebidas {
  idDrink: number;
  strDrinkThumb: string;
  strDrink: string;
}
const CardsCocteles = ({ drinks,inputValue }: any) => {
  const initialId = "11007";
  const {open,toggleDrawer,id} = useToggleDrawer();
  return (
    <>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">{inputValue.toUpperCase()}</ListSubheader>
        </ImageListItem>
        {drinks.map((item: bebidas) => (
          <ImageListItem key={item.idDrink} onClick={toggleDrawer(true,item.idDrink)} >
            <img
              src={item.strDrinkThumb}
              srcSet={`${item.strDrinkThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.strDrink}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.strDrink}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.strDrink}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false,initialId)}
        onOpen={toggleDrawer(true,initialId)}
      >
        <CardCoctel id={id} />
      </SwipeableDrawer>
    </>
  );
};

export default CardsCocteles;
