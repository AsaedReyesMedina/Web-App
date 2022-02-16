import React, { useReducer } from "react";

const init = () => {
  return JSON.parse(localStorage.getItem("listCocteles") || "[]");
};

const useReducerCocteles = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter(
        (listCocteles: { url: any }) => listCocteles.url !== action.payload
      );
    default:
      return state;
  }
};

const ReducerCocteles = ({ init }: any) => {
  const [listCocteles, dispatch] = useReducer(useReducerCocteles, [], init);
  return { listCocteles, dispatch };
};

export { useReducerCocteles, ReducerCocteles, init };
