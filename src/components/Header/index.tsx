import React from 'react'
import { Hcontent, IconSpacing, IconWrapper } from './styles'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { Menu } from '@mui/icons-material'
import StyledButton from '@/components/StyledButton'
import { Link } from 'react-router-dom'

export function Header() {
  const xs = useMediaQuery('(max-width:797px)')
  const menuItem = [
    {
      name: 'Home', pathname: '/'
    },
    {
      name: 'Sobre', pathname: 'sobre'
    }
  ]
  return (
    <Hcontent>
      {xs && (
        <Box display="flex" width="100%" p="8px" flexDirection="column">
          <Box
            width="100%"
            margin="0 auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
              <Menu sx={{ fontSize: 40 }} />
              <img src="https://imgur.com/dBwKZVv.png" height={50} alt="Agrai" />
              <Box width={40} height={40} style={{opacity:"0"}}>
                <Typography >right</Typography>
              </Box>
          </Box>
        </Box>
      )}
      {!xs && (
        <>
          <img src="https://imgur.com/dBwKZVv.png" height={50} alt="Agrai" />
          <IconWrapper>
            <IconSpacing>
              {menuItem.map((item, index) => (
                <Link key={index} to={item.pathname}>
                  <Typography
                    key={index}
                    className="menu-hover"
                    fontWeight="300"
                    color="#7a7a7a"
                    fontSize={16}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </IconSpacing>
          </IconWrapper>
          <StyledButton icon="🍃" description="BLOG" />
        </>
      )}
    </Hcontent>
  )
}

export default Header
