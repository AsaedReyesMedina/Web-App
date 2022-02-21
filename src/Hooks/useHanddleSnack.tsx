import { useState } from 'react'
import { SnackbarOrigin } from '@mui/material';
export interface State extends SnackbarOrigin {
    open: boolean;
  }
const useHanddleSnack = () => {
    const [state, setState] = useState<State>({
        open: false,
        vertical: "top",
        horizontal: "center",
      });
      
      const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ open: true, ...newState });
      };
      const handleClose = () => {
        setState({ ...state, open: false });
        console.log(state);
      };
      return{
          state,handleClick, handleClose
      }
}

export default useHanddleSnack