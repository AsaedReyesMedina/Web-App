import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import useFetch from "../../Hooks/useFetch";
import {  List, ListItem } from "@mui/material";
import { useReducerBreaking } from "../../Hooks/useReducerBreaking";
import useHanddleReducer from "../../Hooks/useHanddleReducer";
import useHanddleSnack from "../../Hooks/useHanddleSnack";
import SnackbarFavoritos from "../ui/SnackbarFavoritos";
const CardPersonajes = ({ nombre }: any) => {
  const {state,handleClose, handleClick } = useHanddleSnack();
  const init = () => {
    return JSON.parse(localStorage.getItem("listBreaking") || "[]");
  };
  const [listBreaking, dispatch] = React.useReducer(
    useReducerBreaking,
    [],
    init
  );
  const { data }: any = useFetch(
    `https://breakingbadapi.com/api/characters?name=${nombre}`
  );
  const urlNew = `https://breakingbadapi.com/api/characters?name=${nombre}`;
  const { img, name, nickname, status, birthday } = !!data && data[0];
  React.useEffect(() => {
    localStorage.setItem("listBreaking", JSON.stringify(listBreaking));
  }, [listBreaking]);
  const { favorito, handdleDelete, handdleSubmit } = useHanddleReducer(
    dispatch,
    name,
    urlNew
  );
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
      <SnackbarFavoritos state={state} handleClose={handleClose}/>
    </>
  );
};
export default CardPersonajes;
