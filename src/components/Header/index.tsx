import React from 'react'
import { Hcontent, IconSpacing, IconWrapper, HeaderItem } from './styles'
import { useMediaQuery } from '@mui/material'
import StyledButton from '@/components/StyledButton'
import { Link } from 'react-router-dom'
import SocialMedia from '../SocialMedia'

export function Header() {
  const xs = useMediaQuery('(max-width:797px)')
  const menuItem = [
    {
      name: 'Home',
      pathname: '/'
    },
    {
      name: 'Sobre',
      pathname: '/sobre'
    }
  ]

  return (
    <Hcontent>
      <>
        <div style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/')}>
          <img src="https://imgur.com/dBwKZVv.png" height={50} alt="Agrai" />
        </div>
        <IconWrapper>
          <IconSpacing>
            {menuItem.map((item, index) => (
              <HeaderItem
                key={index}
                pathname={item.pathname}
                name={item.name}
              />
            ))}
            <Link to="/blog">
              <HeaderItem pathname="/x" name="Blog" />
            </Link>
          </IconSpacing>
        </IconWrapper>
        {!xs && <SocialMedia color="black"/>}
      </>
    </Hcontent>
  )
}

export default Header
