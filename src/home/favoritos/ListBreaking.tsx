import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { ListItemAvatar, ListItemButton } from '@mui/material';
const ListBreaking = ({list}:any) => {
  console.log(list)
  return (
   <>
   <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {list? (list.map((list:any) => (
        <ListItemButton key={list.id} >
        <ListItemText primary={list.url} />
        <ListItemAvatar>
          
        </ListItemAvatar>
      </ListItemButton>
      ))):null
    }
    </List>
   </>
  )
}

export default ListBreaking;