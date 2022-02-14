import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function DrawerCoctel() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open</Button>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardMedia component="img" height="250"  image="" alt="tile"/>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              adasdsadas
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </SwipeableDrawer>
    </>
  );
}
