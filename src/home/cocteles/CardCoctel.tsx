import React from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import useFetch from "../../Hooks/useFetch";
import { useReducerCocteles } from "../../Hooks/useReducerCocteles";
export interface State extends SnackbarOrigin {
  open: boolean;
}
const CardCoctel = ({ id }: any) => {
  // reducer
  const init = () => {
    return JSON.parse(localStorage.getItem("listCocteles") || "[]");
  };
  const [listCocteles, dispatch] = React.useReducer(
    useReducerCocteles,
    [],
    init
  );
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  
//acciones de la api
  const { data }: any = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const urlNew = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { drinks }: any = !!data && data;

  //acciones del reduceer
  React.useEffect(() => {
    localStorage.setItem("listCocteles", JSON.stringify(listCocteles));
  }, [listCocteles]);
  const [favorito, setFavorito] = React.useState(false);
  const handdleDelete = (listUrl: any) => {
    const action = {
      type: "delete",
      payload: listUrl,
    };
    dispatch(action);
    setFavorito(!favorito);
  };
  const handdleSubmit = (name: any) => {
    setFavorito(!favorito);
    const newFavoritoBreaking = {
      id: new Date().getTime(),
      name,
      url: urlNew,
    };
    const action = {
      type: "add",
      payload: newFavoritoBreaking,
    };
    dispatch(action);
  };
  console.log(listCocteles);

  return (
    <>
      {drinks
        ? drinks.map((item: any) => (
            <Card sx={{ minWidth: 275 }} key={item.idDrink}>
              <CardMedia
                component="img"
                height="250"
                image={item.strDrinkThumb}
                alt="tile"
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <Typography variant="h5" component="div">
                  {item.strDrink}
                  {!favorito ? (
                      <Button
                      onClick={() => {
                        handdleSubmit(item.strDrink);
                        handleClick({
                          vertical: "bottom",
                          horizontal: "right",
                        });
                      }}
                        type="submit"
                        style={{ marginLeft: "75%", marginTop: -65 }}
                        variant="outlined"
                        color="success"
                        size="small"
                      >
                        Favoritos
                      </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        handdleDelete(urlNew);
                        handleClick({
                          vertical: "bottom",
                          horizontal: "right",
                        });
                      }}
                      style={{ marginLeft: "75%", marginTop: -65 }}
                      variant="outlined"
                      color="error"
                      size="small"
                    >
                      Quitar
                    </Button>
                  )}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <b>Categoria:</b> {item.strCategory}
                </Typography>
                <Typography variant="body2">
                  <b>Tipo:</b> {item.strAlcoholic}
                  <br />
                  <b>Ingredientes:</b>
                  {item.strIngredient1},{item.strIngredient2},
                  {item.strIngredient3},{item.strIngredient4}
                  <br />
                  <b>Instrucciones:</b> {item.strInstructions}
                </Typography>
              </CardContent>
            </Card>
          ))
        : null}

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Agregado a favoritos
        </Alert>
      </Snackbar>
    </>
  );
};

export default CardCoctel;
