import React from 'react'
import { Header } from '@/components/Header'
import { Container, Template } from '@/styles/styles'
import { Newsletter } from '@/components/Newsletter'
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
            justifyContent="flex-start"
            alignItems="center"
            mt="16px"
            flexDirection={{ xs: 'column-reverse', md: 'row' }}
          >
            <Box width={{ xs: '100%', md: '50%' }}>
              <img alt="Cliente" src="https://i.imgur.com/tXbF5Pq.png" width="100%" />
            </Box>
            <Box
              display="flex"
              width={{ xs: '100%', md: '50%' }}
              flexDirection="column"
              justifyContent="center"
            >
              <Box display={{ xs: 'none', md: 'flex' }}>
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
                Aliqua culpa labore aliquip ea dolor nostrud sit non elit
                commodo veniam.
              </Typography>
              <Box
                mt="16px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <RegisterForm />
              </Box>
            </Box>
          </Box>
        </Container>
        <Newsletter />
        <Footer />
      </Template>
    </>
  )
}
