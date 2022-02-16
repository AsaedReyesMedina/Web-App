import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { UseContext } from "../../Hooks/UseContext";
const About = () => {
  const {setTitle}:any = React.useContext(UseContext);
  setTitle("Web App Challenge");
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Bienvenidos a mi app
          </Typography>
          <Typography variant="h5" component="div">
            Web App Challenge
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Una aplicación react que consume tres diferentes endpoints
          </Typography>
          <Typography variant="body2">
            https://breakingbadapi.com/
            <br />
            https://www.thecocktaildb.com/
            <br />
            https://pokeapi.co/
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default About;
