import { Avatar, Box, Rating, Typography } from '@mui/material'
import React from 'react'

function Testimonials({content}:any) {

  return (
    <>
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        alignItems="center"
        mb="30px"
        mt="20px"
      >
        <Typography variant="h4" fontWeight="300" color="#7a7a7a">
          Depoimentos:
        </Typography>
      </Box>
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        {content.map((item, index) => (
          <div key={index}>
            <Box
              key={index}
              width="480px"
              height="auto"
              mb="5px"
              padding="16px"
              bgcolor="transparent"
              border="1px solid #4FB862"
              borderRadius="5px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box width="100%" mb="16px" justifyContent="flex-start">
                <Rating readOnly value={item.rate} />
              </Box>
              <Typography width="100%" variant="h6" fontWeight={300}>
                {item.comment}
              </Typography>
              <Box
                mt="16px"
                display="flex"
                width="100%"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box mr="12px">
                  <Avatar alt="Carlos Junior" src={item.photo} />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography
                    mt="12px"
                    width="100%"
                    textAlign="start"
                    variant="h5"
                    fontWeight="bold"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    width="100%"
                    textAlign="start"
                    variant="subtitle1"
                    fontWeight="300"
                  >
                    {item.slogan}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        ))}
      </Box>
    </>
  )
}

export default Testimonials
