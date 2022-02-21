import {
  Box,
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useFetch from "../../Hooks/useFetch";
import useToggleDrawer from "../../Hooks/useToggleDrawer";
import CardPersonajes from "./CardPersonajes";
import useInputValue from "../../Hooks/useInputValue";
const CardListBreakingbad = () => {
  const { open, toggleDrawer, id } = useToggleDrawer();
  const initialId = "";
  const {inputValue,handdleInputChange,handdleSubmit} = useInputValue()
  const { data }: any = useFetch(
    `https://breakingbadapi.com/api/characters?name=${inputValue}`
  );
  return (
    <>
      <Card>
        <CardContent>
        <Typography variant="h6" component="div">
          {inputValue.toUpperCase()}
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <form onSubmit={handdleSubmit}>
              <TextField
                onChange={handdleInputChange}
                style={{ marginTop: 25, marginBottom: 25 }}
                id="filled-search"
                label="Busca un personaje"
                type="search"
                variant="outlined"
                size="small"
              />
            </form>
          </Box>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              position: "relative",
              maxHeight: 420,
              overflow: "auto",
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {data
              ? data.map(({ char_id, name }: any) => (
                  <ListItemButton
                    key={char_id}
                    onClick={toggleDrawer(true, name)}
                  >
                    <ListItemText primary={name} />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                ))
              : null}
          </List>
        </CardContent>
      </Card>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false, initialId)}
        onOpen={toggleDrawer(true, initialId)}
      >
        <CardPersonajes nombre={id} />
      </SwipeableDrawer>
    </>
  );
};

export default CardListBreakingbad;
