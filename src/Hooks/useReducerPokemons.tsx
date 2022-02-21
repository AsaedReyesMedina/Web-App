
const init = () => {
  return JSON.parse(localStorage.getItem("listPokemon") || "[]");
};

const useReducerPokemon = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter(
        (listPokemon: { url: any }) => listPokemon.url !== action.payload
      );
    default:
      return state;
  }
};

export { useReducerPokemon, init };
