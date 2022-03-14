import { Box, Typography } from '@mui/material'
import React from 'react'

function Numbers({ content }: any) {
  return (
    <>
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        alignItems="center"
        mb="24px"
        mt="48px"
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
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        {content.map((item, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            mt={{ xs: '16px', md: 'unset' }}
            justifyContent="center"
            alignItems="center"
            width="210px"
          >
            <Typography
              display="flex"
              justifyContent="center"
              alignItems="center"
              variant="h1"
              color="#4fb849"
            >
              {item.value}
              <Typography display="flex" variant="h3" color="#7a7a7a">
                +
              </Typography>
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h5" color="#7a7a7a">
                {item.title}
              </Typography>
              <Typography variant="h5" color="#7a7a7a">
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Numbers
