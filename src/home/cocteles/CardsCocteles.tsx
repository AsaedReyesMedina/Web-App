import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
interface bebidas {
    idDrink: number;
    strDrinkThumb: string;
    strDrink: string;
  }
const CardsCocteles = ({drinks}:any) => {
  
  return (
    <ImageList >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Margarita</ListSubheader>
      </ImageListItem>
      {drinks.map((item:bebidas) => (
        <ImageListItem key={item.idDrink}>
          <img
            src={item.strDrinkThumb}
            srcSet={`${item.strDrinkThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.strDrink}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.strDrink}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.strDrink}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default CardsCocteles