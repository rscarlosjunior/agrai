import React from 'react'
import { Hcontent, IconSpacing, IconWrapper , HeaderItem} from './styles'
import { useMediaQuery } from '@mui/material'
import StyledButton from '@/components/StyledButton'
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
      pathname: '/sobre'
    }
  ]

  return (
    <Hcontent>
      <>
        <img src="https://imgur.com/dBwKZVv.png" height={50} alt="Agrai" />
        <IconWrapper>
          <IconSpacing>
            {menuItem.map((item, index) => (
              <HeaderItem key={index} pathname={item.pathname} name={item.name}/>
            ))}
            {xs && (
              <Link to="/blog">
                <HeaderItem pathname='/x' name='Blog'/>
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
