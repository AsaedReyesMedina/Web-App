import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListBreaking from "./ListBreaking";
import ListCocteles from "./ListCocteles";
import ListPokemons from "./ListPokemons";
import { UseContext } from "../../Hooks/UseContext";
const Favoritos = () => {
  const {setTitle}:any = React.useContext(UseContext);
  setTitle("Favoritos");

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Breakingbad
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListBreaking/>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Cócteles
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <ListCocteles/>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Pokemons
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListPokemons/>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Favoritos;
