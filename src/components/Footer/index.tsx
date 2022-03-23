import React from 'react'
import {
  Fwrapper,
  Line,
  Ftitle,
  Faddress,
  Wrapper,
  Fbackground,
  Fbutton,
  FbuttonIcon,
  FbuttonWrapper,
  Fimagewrapper
} from './styles'
import EmailIcon from '@mui/icons-material/Email'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import { whatsapp } from '@/pages/utils'

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
        </Wrapper>

        <FbuttonWrapper>
          <Fbutton onClick={() => whatsapp()}>
            <FbuttonIcon>
              <EmailIcon />
            </FbuttonIcon>
            Entre em Contato
          </Fbutton>
          <Fbutton>
            <FbuttonIcon>
              <HeadphonesIcon />
            </FbuttonIcon>
            Saiba Mais
          </Fbutton>
        </FbuttonWrapper>
        <Fimagewrapper>
          <img
            height="45"
            alt="logo"
            width="100"
            src="https://imgur.com/dBwKZVv.png"
          />
        </Fimagewrapper>
      </Fwrapper>
    </Fbackground>
  )
}
