import React from 'react'
import { Header } from '@/components/Header'
import { Container, Template } from '@/styles/styles'
import { usePrismicService } from '@/services/prismic'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'
import Slogan from '@/components/Slogan'
import useMediaQuery from '@mui/material/useMediaQuery'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box } from '@mui/material'
import HowItWorksBox from '@/components/HowItWorksBox'
import Numbers from '@/components/Numbers'
import Differentials from '@/components/Differentials'
import Testimonials from '@/components/Testimonials'

export const Agrai: React.FC = () => {
  const { getPrismicByQuery } = usePrismicService()
  const xs = useMediaQuery('(max-width:797px)')

  return (
    <>
        <Template>
          <Container>
            <Box borderBottom={1} borderColor="#dadada" p="5px">
              <Header/>
            </Box>
            <Slogan/>
            <HowItWorksBox/>
            <Numbers/>
            <Differentials/>
            <Testimonials/>
          </Container>
          <Newsletter />
          <Footer />
        </Template>
    </>
  )
}
