import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const About = () => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Bienvenidos a mi app
        </Typography>
        <Typography variant="h5" component="div">
          Web App Challenge
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Una aplicación ReactJS que utiliza tres endpoints:<br/>
          <b>Breaking Bad</b><br/>
          <b>The cocktail DB</b><br/>
          <b>PokeApi</b> 
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;
