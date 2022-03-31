import { ISlogan } from '@/types/contents.interface'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import StyledButton from '../StyledButton'

function Slogan({
  bg = 'white',
  img,
  firstButton,
  firstButtonLink,
  secondButton,
  secondButtonLink,
  buttons,
  description,
  title_desk,
  title_mobile
}: ISlogan) {
  return (
    <Box width="100%" bgcolor={bg}>
    <Box
      maxWidth="966px"
      margin="auto"
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      padding-top="32px"
      padding-bottom="16px"
      flexDirection={{ xs: 'column-reverse', md: 'row' }}
    >
      <Box
        display="flex"
        width={{ xs: '100%', md: '50%' }}
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          mt="16px"
          display={{ xs: 'flex', md: 'none' }}
          justifyContent="center"
        >
          <Typography variant="h3" textAlign="center" color="#4fb849">
            {title_mobile}
          </Typography>
        </Box>
        <Box display={{ xs: 'none', md: 'flex' }}>
          <Typography variant="h1" color="#4fb849">
            {title_desk}
          </Typography>
        </Box>
        <Typography textAlign={{xs:'center', md: 'start'}} mr={{xs:'unset', md:'32px'}} mt="16px" typography="h5" color="#7a7a7a">
          {description}
        </Typography>
        {buttons && (
          <Box
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            mt="16px"
            mb={{xs:"32px"}}
          >
            <Box mr="8px">
              <Link style={{ textDecoration: 'none' }} to={firstButtonLink}>
                <StyledButton icon="🧑‍🌾" description={firstButton} />
              </Link>
            </Box>
            <Link style={{ textDecoration: 'none' }} to={secondButtonLink}>
              <StyledButton icon="🌻" description={secondButton} />
            </Link>
          </Box>
        )}
      </Box>
      <Box mt={{xs:'32px'}} width={{ xs: '100%', md: '50%' }}>
        <img alt="Plantação orgânica e vendas" src={img} width="100%" />
      </Box>
    </Box>
    </Box>
  )
}

export default Slogan
