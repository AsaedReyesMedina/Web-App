import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [state, setState] = useState({});
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          data
        });
      }).catch(error => console.error( error));
  }, [url]);
  return state;
};

export default useFetch;
