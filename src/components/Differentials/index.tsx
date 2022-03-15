import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Differentials({content}:any) {

  const topDiff = content.filter(item => item.isSecondLine === false)

  const bottomDiff = content.filter(item => item.isSecondLine === true)

  return (
    <Box bgcolor="#F5F5F5" p="16px" mt="32px" mb="24px" mt="48px">
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        alignItems="center"
        mb="24px"
      >
        <Typography variant="h4" fontWeight="300" color="#7a7a7a">
          Nossos diferenciais:
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        {topDiff.map((item, index) => (
          <Box key={index} display="flex" mt={{ xs: '16px', md: 'unset' }} alignItems="center" justifyContent="flex-start">
            <Box width="210px" display="flex" flexDirection="column">
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img width={50} height={50} src={item.icon} />
              </Box>
              <Typography p="5px" textAlign="center" fontWeight="300" color="#7a7a7a" variant="h5">
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
      <Grid
        container
        spacing={3}
        maxWidth="966px"
        margin="auto"
        mt="30px"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        {bottomDiff.map((item, index) => (
          <Box key={index} display="flex" mt={{ xs: '16px', md: 'unset' }} alignItems="center" justifyContent="flex-start">
            <Box width="210px" display="flex" flexDirection="column">
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img width={50} height={50} src={item.icon} />
              </Box>
              <Typography p="5px" textAlign="center" fontWeight="300" color="#7a7a7a" variant="h5">
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default Differentials
