import * as React from "react";
import Card from "@mui/material/Card";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import useFetch from "../../Hooks/useFetch";
import { Alert, List, ListItem } from "@mui/material";
import { useReducerBreaking } from "../../Hooks/useReducerBreaking";
export interface State extends SnackbarOrigin {
  open: boolean;
}
const CardPersonajes = ({ nombre }: any) => {
  const init = () => {
    return JSON.parse(localStorage.getItem("listBreaking") || "[]");
  };
  const [listBreaking, dispatch] = React.useReducer(
    useReducerBreaking,
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
  const { data }: any = useFetch(
    `https://breakingbadapi.com/api/characters?name=${nombre}`
  );
  const urlNew = `https://breakingbadapi.com/api/characters?name=${nombre}`;
  const { img, name, nickname, status, birthday } = !!data && data[0];
  React.useEffect(() => {
    localStorage.setItem("listBreaking", JSON.stringify(listBreaking));
  }, [listBreaking]);
  const [favorito, setFavorito] = React.useState(false);
  const handdleDelete = (listUrl: any) => {
    const action = {
      type: "delete",
      payload: listUrl,
    };
    dispatch(action);
    setFavorito(!favorito);
  };
  const handdleSubmit = (e: any) => {
    setFavorito(!favorito);
    e.preventDefault();
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
  return (
    <>
      {!data ? (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      ) : (
        <Card>
          <CardMedia component="img" height="450" image={img} alt="tile" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
              {!favorito ? (
                <form onSubmit={handdleSubmit}>
                  <Button
                    onClick={handleClick({
                      vertical: "bottom",
                      horizontal: "right",
                    })}
                    type="submit"
                    style={{ marginLeft: "75%", marginTop: -65 }}
                    variant="outlined"
                    color="success"
                    size="small"
                  >
                    Favoritos
                  </Button>
                </form>
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
            <List style={{ marginTop: -45 }}>
              <ListItem>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Nickname: <b>{nickname}</b>
                  {birthday ? (
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Fecha de nacimiento: <b>{birthday}</b>
                    </Typography>
                  ) : null}
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Estado: <b>{status}</b>
                  </Typography>
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      )}

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
export default CardPersonajes;
