
const init = () => {
  return JSON.parse(localStorage.getItem("listBreaking") || "[]");
};

const useReducerBreaking = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter(
        (listBreaking: { url: any }) => listBreaking.url !== action.payload
      );
    default:
      return state;
  }
};


export { useReducerBreaking, init };
