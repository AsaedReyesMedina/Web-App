import { useState } from "react";

const useToggleDrawer = () => {
  const [open, setOpen] = useState(false);
const [id, setId] = useState("");
  const toggleDrawer = (newOpen: boolean,id:any) => () => {
    const idstring = id;
    const idapi = idstring.toString();
    setOpen(newOpen);
    setId(idapi);
  };
  return {
      open,toggleDrawer,id
  }
};

export default useToggleDrawer;
