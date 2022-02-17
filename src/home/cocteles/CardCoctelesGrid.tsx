import * as React from "react";
import useFetch from "../../Hooks/useFetch";
import CardsCocteles from "./CardsCocteles";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import CardIngredientes from "./CardIngredientes";
const CardCoctelesGrid = () => {
  const [filtro, setFiltro] = React.useState("s");
  const handleClickIngrediente = () => {
    setInputValue("vodka");
    setFiltro("i");
  };
  const handleClickCoctel = () => {
    setFiltro("s");
  };
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
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?${filtro}=${inputValue}`
  );
  const { ingredients }: any = !!data && data;
  const { drinks }: any = !!data && data;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={handdleSubmit}>
          <TextField
            onChange={handdleInputChange}
            id="filled-search"
            label="Buscar ..."
            type="search"
            variant="outlined"
            size="small"
            style={{ width: 210 }}
          />
          {filtro === "s" ? (
            <Button
              onClick={handleClickIngrediente}
              style={{ marginLeft: 5, marginTop: 5 }}
              variant="contained"
              size="small"
            >
              Ingredients
            </Button>
          ) : (
            <Button
              onClick={handleClickCoctel}
              style={{ marginLeft: 10, marginTop: 5 }}
              variant="contained"
              size="small"
            >
              Cócteles
            </Button>
          )}
        </form>
      </Box>
      {drinks ? (
        <CardsCocteles drinks={drinks} inputValue={inputValue} />
      ) : (
        <CardIngredientes ingredients={ingredients} />
      )}
    </>
  );
};

export default CardCoctelesGrid;
