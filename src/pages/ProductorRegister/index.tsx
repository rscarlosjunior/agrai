import React from 'react'
import { Header } from '@/components/Header'
import { Container, Template } from '@/styles/styles'
import { Footer } from '@/components/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box, Typography } from '@mui/material'
import RegisterForm from '@/components/RegisterForm'


export const ProductorRegister: React.FC = () => {
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
            minHeight="calc(100vh - 349px)"
            display="flex"
            width="100%"
            justifyContent="space-between"
            alignItems="flex-start"
            mt="32px"
            flexDirection={{ xs: 'column-reverse', md: 'row' }}
          >
            <Box width={{ xs: '100%', md: '49%' }}>
              <img alt="Produtor Orgânico" src="https://i.imgur.com/740aSxS.jpg" width="100%" />
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
                  Cadastro de Produtor
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
                Aliqua culpa labore aliquip ea dolor nostrud sit non elit
                commodo veniam.
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
              {/* id set how form the client gonna render */}
                <RegisterForm id={8}/>
              </Box>
            </Box>
          </Box>
        </Container>
        <Footer />
      </Template>
    </>
  )
}
