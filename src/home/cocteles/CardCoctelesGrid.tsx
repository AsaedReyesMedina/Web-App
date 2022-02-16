import * as React from "react";
import useFetch from "../../Hooks/useFetch";
import CardsCocteles from "./CardsCocteles";
import Box from "@mui/material/Box";

import { Button, TextField } from "@mui/material";
const CardCoctelesGrid = () => {
  const [inputValue, setInputValue] = React.useState("margarita");
  const handdleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handdleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setInputValue(inputValue);
    }
  };
  const { data }: any = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
  );
  const { drinks }: any = !!data && data;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={handdleSubmit}>
          <TextField
            onChange={handdleInputChange}
            id="filled-search"
            label="Busca un cóctel"
            type="search"
            variant="outlined"
            size="small"
          />
          <Button
            style={{ marginLeft: 10, marginTop: 5 }}
            variant="contained"
            size="small"
          >
            Filtrar
          </Button>
        </form>
      </Box>
      {drinks ? (
        <CardsCocteles drinks={drinks} inputValue={inputValue} />
      ) : null}
    </>
  );
};

export default CardCoctelesGrid;
