import React from "react";
import { CardMedia } from "@mui/material";
import useFetch from "../../Hooks/useFetch";
const ImgPokemon = ({ url }: any) => {
  const { data }: any = useFetch(url);

  const { sprites } = !!data && data;
  const { front_default } = !!sprites && sprites;
  return (
    <>
      <CardMedia
        component="img"
        height="50"
        width="50"
        image={front_default}
        alt="pokemon"
      />
    </>
  );
};

export default ImgPokemon;
