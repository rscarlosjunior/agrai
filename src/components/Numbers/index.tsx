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
        mt="32px"
        mb="16px"
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
