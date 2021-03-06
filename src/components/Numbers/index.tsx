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
        justifyContent='flex-start'
        alignItems="center"
        mt="40px"
        mb="16px"
      >
        <Typography variant="h4" fontWeight="bold" color="#000000">
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
        overflow="auto hidden"
      >
        {content.map((item, index) => (
          <Box
            minWidth={210}
            key={index}
            display="flex"
            flexDirection="column"
            justifyContent={{ xs: 'flex-start', md: 'center' }}
            alignItems="center"
            style={{
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <Typography
              display="flex"
              justifyContent="center"
              alignItems="center"
              variant="h1"
              color="#fe7500"
            >
              {item.value}
              <Typography display="flex" variant="h3" color="#fe7500">
                +
              </Typography>
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h5" color="#000000">
                {item.title}
              </Typography>
              <Typography variant="h5" color="#000000">
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
