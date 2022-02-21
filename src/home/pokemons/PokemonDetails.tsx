import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import useFetch from "../../Hooks/useFetch";
import { useReducerPokemon } from "../../Hooks/useReducerPokemons";
import { Alert } from "@mui/material";
export interface State extends SnackbarOrigin {
  open: boolean;
}
const PokemonDetails = ({ url }: any) => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  // reducer
  const init = () => {
    return JSON.parse(localStorage.getItem("listPokemon") || "[]");
  };

  const [listPokemon, dispatch] = React.useReducer(useReducerPokemon, [], init);
  //api
  const { data }: any = useFetch(url);
  const urlNew = url;
  const { name, sprites, types, abilities } = !!data && data;
  const { front_default, front_shiny, back_default, back_shiny } =
    !!sprites && sprites;
  const imgPokemon = [front_default, front_shiny, back_default, back_shiny];
  const theme = useTheme();

  //slider
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imgPokemon.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  //acciones del reduceer
  React.useEffect(() => {
    localStorage.setItem("listPokemon", JSON.stringify(listPokemon));
  }, [listPokemon]);
  const [favorito, setFavorito] = React.useState(false);
  const handdleDelete = (listUrl: any) => {
    const action = {
      type: "delete",
      payload: listUrl,
    };
    dispatch(action);
    setFavorito(!favorito);
  };
  const handdleSubmit = (name: any) => {
    setFavorito(!favorito);
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
  return (
    <>
      {data ? (
        <Card>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {imgPokemon.map((img, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        alignItems: "center",
                        height: 255,
                        display: "block",
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={img}
                      alt={img}
                    />
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name.toUpperCase()}
              {!favorito ? (
                <Button
                  onClick={() => {
                    handdleSubmit(name);
                    handleClick({
                      vertical: "bottom",
                      horizontal: "right",
                    });
                  }}
                  type="submit"
                  style={{ marginLeft: "75%", marginTop: -65 }}
                  variant="outlined"
                  color="success"
                  size="small"
                >
                  Favoritos
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handdleDelete(urlNew);
                    handleClick({
                      vertical: "bottom",
                      horizontal: "right",
                    });
                  }}
                  style={{ marginLeft: "75%", marginTop: -65 }}
                  variant="outlined"
                  color="error"
                  size="small"
                >
                  Quitar
                </Button>
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Tipo: </b> {types.map((type: any) => type.type.name)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Abilidades: </b>{" "}
              {abilities.map(({ ability }: any) => ` ${ability.name}, `)}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
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
    </>
  );
};

export default PokemonDetails;
