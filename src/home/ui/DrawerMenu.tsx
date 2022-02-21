import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import { Menu, MenuSecundary } from "../../data/menu";
import { useNavigate } from "react-router-dom";

const DrawerMenu = (props: any) => {
  const navigate = useNavigate();
  const menu = Menu;
  const drawer = (
    <div>
      <List>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Asaed Reyes
          </Typography>
        </Toolbar>
        {menu.map((menu) => (
          <ListItem button key={menu.id} onClick={() => navigate(menu.url)}>
            <ListItemText primary={menu.title} />
            <img
              src={menu.img}
              alt={menu.title}
              loading="lazy"
              className="imgItemMenu"
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      {MenuSecundary.map((menu) => (
        <ListItem button key={menu.id} onClick={() => navigate(menu.url)}>
          <ListItemText primary={menu.title} />
          {menu.title === "About" ? <InfoIcon /> : <StarIcon />}
        </ListItem>
      ))}
    </div>
  );
  return drawer;
};

export default DrawerMenu;
