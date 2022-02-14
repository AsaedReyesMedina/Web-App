import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import useCounter from "../../Hooks/useCounter";
import useFetch from "../../Hooks/useFetch";
import { List, ListItem } from "@mui/material";

const CardPersonajes = () => {
  const { counter, reset, increment, decrement } = useCounter(1);
  const {  data }: any = useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`);
  const {img, name, nickname, status, birthday  } =   !!data && data[0] ;
  if (counter === 56) {
    reset();
  }
  return (
    <>
      {!data ? (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      ) : (
        <Card >
          <CardMedia component="img" height="480"  image={img} alt="tile" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <List>
              <ListItem>
                <Typography gutterBottom variant="subtitle1" component="div">
                 Nickname: <b>{nickname}</b>
                </Typography>
              </ListItem>
              {birthday?(<ListItem>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Fecha de nacimiento: <b>{birthday}</b>
                </Typography>
              </ListItem>):null}
                <ListItem>
                <Typography gutterBottom variant="subtitle1" component="div">
                 Estado: <b>{status}</b> 
                </Typography>
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            {counter > 1 ? (
              <Button size="small" onClick={decrement}>
                Personaje anterior
              </Button>
            ) : null}
            <Button size="small" onClick={increment}>
              Siguiente personaje
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};
export default CardPersonajes;
