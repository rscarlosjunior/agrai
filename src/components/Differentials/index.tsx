import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useMemo } from 'react'

function Differentials({ content }: any) {
  const xs = useMediaQuery('(max-width:797px)')
  const top = content.filter((item) => item.isSecondLine === false)
  const bottom = content.filter((item) => item.isSecondLine === true)
  
  const mobile = useMemo(() => {
    const arr = top.concat(bottom)
    return (
      arr.map((item, index) => (
        <Box
          minWidth={160}
          minHeight={80}
          key={index}
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
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img alt="diferencias em vendas de produtos orgânicos" width={50} height={50} src={item.icon} />
          </Box>
          <Typography textAlign="center" p="5px" variant="h5" color="#7a7a7a">
            {item.title}
          </Typography>
        </Box>
      ))
    )
  }, [top,bottom])

  return (
    <Box pt="4px" mt="40px" mb="24px">
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent='flex-start'
        alignItems="center"
        mb="16px"
      >
        <Typography variant="h4" fontWeight="300" color="#7a7a7a">
          Nossos diferenciais:
        </Typography>
      </Box>
      {xs ? (
        <Box
          maxWidth="966px"
          margin="auto"
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          overflow="auto hidden"
        >
          {mobile}
        </Box>
      ) : (
        <>
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
            {top.map((item, index) => (
              <Box
                key={index}
                display="flex"
                mt={{ xs: '16px', md: 'unset' }}
                alignItems="center"
                justifyContent="flex-start"
              >
                <Box width="210px" display="flex" flexDirection="column">
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img alt="diferencias em vendas de produtos orgânicos" width={50} height={50} src={item.icon} />
                  </Box>
                  <Typography
                    p="5px"
                    textAlign="center"
                    fontWeight="300"
                    color="#7a7a7a"
                    variant="h5"
                  >
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
            {bottom.map((item, index) => (
              <Box
                key={index}
                display="flex"
                mt={{ xs: '16px', md: 'unset' }}
                alignItems="center"
                justifyContent="flex-start"
              >
                <Box width="210px" display="flex" flexDirection="column">
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img alt="diferencias em vendas de produtos orgânicos" width={50} height={50} src={item.icon} />
                  </Box>
                  <Typography
                    p="5px"
                    textAlign="center"
                    fontWeight="300"
                    color="#7a7a7a"
                    variant="h5"
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </>
      )}
    </Box>
  )
}

export default Differentials
