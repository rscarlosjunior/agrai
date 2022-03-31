import React from 'react'
import {
  Fwrapper,
  Line,
  Ftitle,
  Faddress,
  Wrapper,
  Fbackground,
  Fimagewrapper
} from './styles'
import { Box } from '@mui/material'
import SocialMedia from '../SocialMedia'
import RegisterForm from '../RegisterForm'

export const Footer = () => {

  return (
    <Fbackground>
      <Fwrapper>
        <Wrapper>
          <Ftitle>Localização</Ftitle>
          <Line />
          <Faddress>Avenida Nossa Senhora da Penha, n 595</Faddress>
          <Faddress>Santa Lúcia, ES</Faddress>
          <Faddress>contato@agrai.com.br</Faddress>
          <Faddress>+55 27 9971-2369</Faddress>
          <Box>
            <Line />
            <Box mt="8px">
              <Box mb="8px">
                <Ftitle>Entrem em contato:</Ftitle>
              </Box>
              <SocialMedia color='white'/>
            </Box>
          </Box>
        </Wrapper>
        <Fimagewrapper>
          <Box mt="12px" mb="12px">
            <img
              height="45"
              alt="logo"
              width="100"
              src="https://imgur.com/dBwKZVv.png"
            />
          </Box>
          <RegisterForm id={10}/>
        </Fimagewrapper>
      </Fwrapper>
    </Fbackground>
  )
}
