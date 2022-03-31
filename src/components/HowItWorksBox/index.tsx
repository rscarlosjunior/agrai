import { ArrowRightAlt } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { BoxWithShadow } from './styles'

function HowItWorksBox({ content }: any) {
  return (
    <Box width="100%" pt='32px' pb='32px' style={{
      backgroundImage: "url('https://i.imgur.com/kGb6DIy.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent='flex-start'
        alignItems="center"
        mb="16px"
      >
        <Typography variant="h4" fontWeight="bold" color="#000000">
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
        overflow={{xs:"auto hidden", md:'unset'}}
      >
        {content.map((item, index) => (
          <>
            <BoxWithShadow
              key={index}
              minWidth={180}
              maxWidth={180}
              minHeight={260}
              maxHeight={260}
              padding="16px"
              bgcolor="white"
              border="1px dashed rgb(80, 184, 72)"
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
                mb="16px"
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
                  fontWeight="bold"
                  color="#000000"
                  variant="h5"
                  mb="8px"
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
            </BoxWithShadow>
            {!item.last && (
              <Box color="#000000">
                <ArrowRightAlt width={1} height="20px" />
              </Box>
            )}
          </>
        ))}
      </Box>
    </Box>
  )
}

export default HowItWorksBox
