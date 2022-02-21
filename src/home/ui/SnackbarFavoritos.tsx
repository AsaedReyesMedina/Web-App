import { Alert, Snackbar } from '@mui/material'
const SnackbarFavoritos = ({state,handleClose}:any) => {
  const { vertical, horizontal, open } = state;
  return (
    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Agregado a favoritos
        </Alert>
      </Snackbar>
  )
}

export default SnackbarFavoritos