import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import useCounter from "../../Hooks/useCounter";
import useFetch from "../../Hooks/useFetch";

const CardFrases = () => {
  const { counter, reset, increment, decrement } = useCounter(1);
  const { data }: any = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];
  if (counter === 30) {
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
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {quote}-
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              —{author}
            </Typography>
          </CardContent>
          <CardActions>
            {counter > 1 ? (
              <Button size="small" onClick={decrement}>
                Frase anterior
              </Button>
            ) : null}
            <Button size="small" onClick={increment}>
              Siguiente frase
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default CardFrases;
