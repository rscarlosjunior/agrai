import { ArrowRightAlt } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

function HowItWorksBox({ content }: any) {
  return (
    <>
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent='flex-start'
        alignItems="center"
        mb="16px"
        mt="32px"
      >
        <Typography variant="h4" fontWeight="300" color="#000000">
          Como funciona:
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
          <>
            <Box
              key={index}
              minWidth={180}
              maxWidth={180}
              minHeight={260}
              maxHeight={260}
              padding="16px"
              bgcolor="transparent"
              border="1px solid #4FB862"
              borderRadius="5px"
              display="flex"
              flexDirection="column"
              justifyContent={{ xs: 'flex-start', md: 'center' }}
              alignItems="center"
              style={{
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <Box
                width="100%"
                mb="36px"
                display="flex"
                justifyContent="center"
              >
                <img
                  alt="Como isso funciona"
                  width={50}
                  height={50}
                  src={item.icon}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                height="80px"
              >
                <Typography
                  textAlign="center"
                  fontWeight="300"
                  color="#000000"
                  variant="h5"
                >
                  {item.title}
                </Typography>
                <Typography
                  textAlign="center"
                  fontWeight="300"
                  color="#000000"
                  variant="subtitle1"
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
            {!item.last && (
              <Box color="#000000">
                <ArrowRightAlt width={1} height="20px" />
              </Box>
            )}
          </>
        ))}
      </Box>
    </>
  )
}

export default HowItWorksBox
