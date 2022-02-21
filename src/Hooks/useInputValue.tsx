import  { useState } from 'react'

const useInputValue = () => {
  const [inputValue, setInputValue] = useState("");
  const handdleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handdleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setInputValue(inputValue);
    }
  };
  return{
    inputValue,setInputValue,handdleInputChange,handdleSubmit
  }
}

export default useInputValue