import { Grid } from '@mui/material'
import React from 'react'
import CardListBreakingbad from './CardListBreakingbad'
import CardPersonajes from './CardPersonajes'

const Breakingbad = () => {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
        <CardListBreakingbad/>
        {/* <CardPersonajes/> */}
    </Grid>
    <Grid item xs={12} md={6}>
      {/* <CardFrases/> */}
    </Grid>
  </Grid>
  )
}

export default Breakingbad