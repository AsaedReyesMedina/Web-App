import React from "react";
import Button from "@mui/material/Button";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import useFetch from "../../Hooks/useFetch";
const CardCoctel = ({ id }: any) => {
  const { data }: any = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { drinks }: any = !!data && data;
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
    </>
  );
};

export default CardCoctel;
