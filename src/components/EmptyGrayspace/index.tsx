import { IEmptyGrayspace } from '@/types/contents.interface'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function EmptyGrayspace({
  img,
  RightTitle,
  RightSubtitle,
  leftTitle,
  RightDescription
}: IEmptyGrayspace) {
  return (
    <Box bgcolor="#F5F5F5" p="16px" mt="32px" mb="24px" mt="48px">
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Box width={{ xs: '100%', md: '50%' }}>
          {img ? (
            <img src={img} width="100%" />
          ) : (
            <Typography variant="h3" textAlign="center" color="black">
              {leftTitle}
            </Typography>
          )}
        </Box>
        <Box
          display="flex"
          width={{ xs: '100%', md: '50%' }}
          flexDirection="column"
          justifyContent="center"
        >
          {!leftTitle ? (
            <>
              <Typography variant="h3" pt={{xs:'16px', md:'unset'}}  textAlign="center" color="black">
                {RightTitle}
              </Typography>
              <Typography variant="h5" pt='16px' margin="auto" maxWidth={350} textAlign="center" color="#7a7a7a">
                {RightSubtitle}
              </Typography>
            </>
          ) : (
            <Typography variant="h5"  pt={{xs:'16px', md:'unset'}} textAlign="center" color="#7a7a7a">
              {RightDescription}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default EmptyGrayspace
