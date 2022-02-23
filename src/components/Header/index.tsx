import React from 'react'
import { Hcontent, IconSpacing, IconWrapper } from './styles'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { Menu } from '@mui/icons-material'
import StyledButton from '@/components/StyledButton'

export function Header() {
  const xs = useMediaQuery('(max-width:797px)')
  const menuItem = ['Home', 'Sobre', 'Cadastro']
  return (
    <Hcontent>
      {xs && (
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Menu sx={{ fontSize: 40 }} />
          <img src="https://imgur.com/dBwKZVv.png" height={50} alt="Agrai" />
          <StyledButton />
        </Box>
      )}
      {!xs && (
        <>
          <img src="https://imgur.com/dBwKZVv.png" height={50} alt="Agrai" />
          <IconWrapper>
            <IconSpacing>
              {menuItem.map((item,index) => (
                <Typography
                  key={index}
                  className="menu-hover"
                  fontWeight="300"
                  color="#7a7a7a"
                  fontSize={16}
                >
                  {item}
                </Typography>
              ))}
            </IconSpacing>
          </IconWrapper>
          <StyledButton icon="🍃" description="Lorin Ipsum"/>
        </>
      )}
    </Hcontent>
  )
}

export default Header
