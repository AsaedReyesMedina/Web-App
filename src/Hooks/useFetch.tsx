import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  
  const [state, setState] = useState({});
  useEffect(() => {
   const getData =  async () =>{
     const response = await fetch(url);
     const json = response.json();
     const data = await json;
     setState({
       data
     })
   }
   getData()
  }, [url]);  
  return state;
};

export default useFetch;
