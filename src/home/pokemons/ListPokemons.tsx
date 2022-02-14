import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {
  Pagination,
  Card,
  CardContent,
  CardMedia,
  List,
  Stack,
  Typography,
} from "@mui/material";
const ListPokemons = ({ results }: any) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            Pokemons: 1000
          </Typography>
          <List
            sx={{
              width: "100%",
              position: "relative",
              overflow: "auto",
              maxHeight: 400,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {results.map(({ name, url }: any, index: number) => (
              <ListItemButton key={index}>
                <ListItemText primary={name} />
                <ListItemAvatar>
                  <CardMedia
                    component="img"
                    height="50"
                    width="50"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png`}
                    alt={name}
                  />
                </ListItemAvatar>
              </ListItemButton>
            ))}
          </List>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Pagination
              count={40}
              variant="outlined"
              shape="rounded"
              size="small"
            />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ListPokemons;
