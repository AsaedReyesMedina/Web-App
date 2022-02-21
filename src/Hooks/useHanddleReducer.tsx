import { useState } from "react";

const useHanddleReducer = ( dispatch:React.Dispatch<any>, name:string, urlNew:string ) => {
  const [favorito, setFavorito] = useState(false);

  const handdleDelete = (urlNew:string) => {
    const action = {
      type: "delete",
      payload: urlNew,
    };
    dispatch(action);
    setFavorito(!favorito);
  };

  const handdleSubmit = (e: any) => {
    setFavorito(!favorito);
    e.preventDefault();
    const newFavoritoBreaking = {
      id: new Date().getTime(),
      name,
      url: urlNew,
    };
    const action = {
      type: "add",
      payload: newFavoritoBreaking,
    };

    dispatch(action);
  };
  return {
    favorito,setFavorito, handdleDelete,handdleSubmit
  };
};

export default useHanddleReducer;
