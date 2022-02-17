import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const CardIngredientes = ({ ingredients }: any) => {
  const { strIngredient, strDescription, strType } =
    !!ingredients && ingredients[0];
  const urlimg = `https://www.thecocktaildb.com/images/ingredients/${strIngredient}-Medium.png`;
  return (
    <Card style={{ marginTop: 30 }}  >
      <CardMedia component="img" image={urlimg} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {strIngredient}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Tipo: </b> {strType}
          <br />
          <b>Descripción: </b> {strDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardIngredientes;
