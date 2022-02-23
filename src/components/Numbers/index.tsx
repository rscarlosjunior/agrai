import { Box, Typography } from '@mui/material'
import React from 'react'

function Numbers() {
  const number = { send: 250, partner: 120, users: 138 }
  return (
    <>
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent="flex-start"
        alignItems="center"
        mb="30px"
        mt="30px"
      >
        <Typography variant="h4" fontWeight="300" color="#7a7a7a">
          Agrai em números:
        </Typography>
      </Box>
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            display="flex"
            justifyContent="center"
            alignItems="center"
            variant="h1"
            color="#4fb849"
          >
            {number.send}
            <Typography display="flex" variant="h3" color="#7a7a7a">
              +
            </Typography>
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" color="#7a7a7a">
              Toneladas
            </Typography>
            <Typography variant="h5" color="#7a7a7a">
              de orgânicos entregues
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            display="flex"
            justifyContent="center"
            alignItems="center"
            variant="h1"
            color="#4fb849"
          >
            {number.partner}
            <Typography display="flex" variant="h3" color="#7a7a7a">
              +
            </Typography>
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" color="#7a7a7a">
              Produtores
            </Typography>
            <Typography variant="h5" color="#7a7a7a">
              na nossa rede de parceiros
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            display="flex"
            justifyContent="center"
            alignItems="center"
            variant="h1"
            color="#4fb849"
          >
            {number.users}
            <Typography display="flex" variant="h3" color="#7a7a7a">
              +
            </Typography>
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" color="#7a7a7a">
              Clientes
            </Typography>
            <Typography variant="h5" color="#7a7a7a">
              em todo Brasil
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Numbers
