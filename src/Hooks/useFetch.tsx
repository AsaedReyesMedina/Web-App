import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [state, setState] = useState({});
  useEffect(() => {
    let isMounted = true;
    fetch(url).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          if (isMounted){
            setState({
              data,
            });
          }
        }).catch((error)=>error);
      } else {
        console.log('No hay data')
      }
    });
    return () => { isMounted = false };
  }, [url]);
  return state;
};

export default useFetch;
