import React from 'react'
import { Hcontent, IconSpacing, IconWrapper } from './styles'
import { Typography, useMediaQuery } from '@mui/material'
import StyledButton from '../../components/StyledButton'
import { Link } from 'react-router-dom'

export function Header() {
  const xs = useMediaQuery('(max-width:797px)')
  const menuItem = [
    {
      name: 'Home',
      pathname: '/'
    },
    {
      name: 'Sobre',
      pathname: 'sobre'
    }
  ]
  return (
    <Hcontent>
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
                  paddingRight="16px"
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
            {xs && (
              <Link to="/blog">
                <Typography
                  className="menu-hover"
                  fontWeight="300"
                  color="#7a7a7a"
                  fontSize={16}
                  paddingRight="16px"
                >
                  Blog
                </Typography>
              </Link>
            )}
          </IconSpacing>
        </IconWrapper>
        {!xs && <StyledButton icon="🍃" description="BLOG" />}
      </>
    </Hcontent>
  )
}

export default Header
