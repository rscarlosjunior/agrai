import { Box, Typography } from '@mui/material'
import React from 'react'
import StyledButton from '../StyledButton'

function Slogan() {
  return (
    <Box
      maxWidth="966px"
      margin="auto"
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection={{ xs: 'column-reverse', md: 'row' }}
    >
      <Box
        display="flex"
        width={{ xs: '100%', md: '50%' }}
        flexDirection="column"
        justifyContent="center"
      >
        <Box display={{xs:'flex', md:'none'}} justifyContent="center">
          <Typography variant="h3" textAlign="center" color="#4fb849">
            A um clique do campo
          </Typography>
        </Box>
        <Box display={{xs:'none', md:'flex'}}>
          <Typography variant="h1" color="#4fb849">
            Qui consectetur ea in duis.
          </Typography>
        </Box>
        <Typography mt="16px" typography="h5" color="#7a7a7a">
          Ad aliquip sint ut qui ad esse aliqua ipsum sunt. Sint excepteur
          laboris qui eiusmod anim magna deserunt eiusmod nostrud.
        </Typography>
        <Box display="flex" justifyContent="space-around" mt="16px">
          <StyledButton icon="🧑‍🌾" description="Quero comprar" />
          <StyledButton icon="🌻" description="Quero Vender" />
        </Box>
      </Box>
      <Box width={{ xs: '100%', md: '50%' }}>
        <img src="https://i.imgur.com/yRkUnLG.png" width="100%" />
      </Box>
    </Box>
  )
}

export default Slogan
