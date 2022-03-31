import React from 'react'
import { Header } from '@/components/Header'
import { Container, Template } from '@/styles/styles'
import { Footer } from '@/components/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box, Typography } from '@mui/material'

import RegisterForm from '@/components/RegisterForm'

export const ClientRegister: React.FC = () => {
  return (
    <>
      <Template>
        <Container>
          <Box borderBottom={1} borderColor="#dadada" p="5px">
            <Header />
          </Box>
          <Box
            maxWidth="966px"
            margin="auto"
            display="flex"
            width="100%"
            minHeight="calc(100vh - 349px)"
            justifyContent="space-between"
            alignItems="flex-start"
            mt="40px"
            flexDirection={{ xs: 'column-reverse', md: 'row' }}
          >
            <Box width={{ xs: '100%', md: '49%' }}>
              <img alt="Cliente" src="https://i.imgur.com/E5pDpjW.jpg" width="100%" />
            </Box>
            <Box
              display="flex"
              width={{ xs: '100%', md: '49%' }}
              flexDirection="column"
              justifyContent="center"
            >
              <Box>
                <Typography
                  width="100%"
                  textAlign="center"
                  variant="h3"
                  color="#4fb849"
                >
                  Cadastro de Cliente
                </Typography>
              </Box>
              <Typography
                pt="16px"
                textAlign="center"
                maxWidth="350px"
                margin="auto"
                typography="h5"
                color="#7a7a7a"
              >
                Fale com um dos nossos especialistas e tenha os melhores produtos no seu estabelecimento.
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                {/* id set how form the client gonna render */}
                <RegisterForm id={9} />
              </Box>
            </Box>
          </Box>
        </Container>
        <Footer />
      </Template>
    </>
  )
}
