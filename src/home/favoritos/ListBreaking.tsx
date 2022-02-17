import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Button, ListItemButton } from "@mui/material";
import { useReducerBreaking } from "../../Hooks/useReducerBreaking";
const ListBreaking = ({ list }: any) => {
  //reducer
  const init = () => {
    return JSON.parse(localStorage.getItem("listBreaking") || "[]");
  };
  const [listBreaking, dispatch] = React.useReducer(
    useReducerBreaking,
    [],
    init
  );
  React.useEffect(() => {
    localStorage.setItem("listBreaking", JSON.stringify(listBreaking));
  }, [listBreaking]);
  const [favorito, setFavorito] = React.useState(false);
  const handdleDelete = (listUrl: any) => {
    const action = {
      type: "delete",
      payload: listUrl,
    };
    dispatch(action);
    setFavorito(!favorito);
  };
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 300,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 200,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {listBreaking.map((list: any) => (
          <ListItemButton key={list.id}>
            <ListItemText primary={list.name} />
            <Button
             onClick={()=>handdleDelete(list.url)}
              variant="outlined"
              color="error"
              size="small"
            >
              Quitar
            </Button>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default ListBreaking;
