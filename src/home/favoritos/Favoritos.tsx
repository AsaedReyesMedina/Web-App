import React, { useReducer, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListBreaking from "./ListBreaking";
import { useReducerBreaking } from "../../Hooks/useReducerBreaking";

const Favoritos = () => {


  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Total de favoritos: 
      </Typography>
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
            Breakingbad:
          </Typography>
          <Typography sx={{ color: "text.secondary"}} >  </Typography>
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
            Cócteles:
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>8</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
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
            Pokemons:
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>12</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Favoritos;
