import React, { useEffect } from 'react'
import { Header } from '@/components/Header'
import { Container, Template } from '@/styles/styles'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'
import Slogan from '@/components/Slogan'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box } from '@mui/material'
import Testimonials from '@/components/Testimonials'
import { Contents } from '@/pages/utils'
import EmptyGrayspace from '@/components/EmptyGrayspace'
import { usePrismic } from '@/hooks/usePrismic'

export const About: React.FC = () => {
  const { results } = usePrismic()

  return (
    <>
      <Template>
        <Container>
          <Box borderBottom={1} borderColor="#dadada" p="5px">
            <Header />
          </Box>
          <Slogan
            buttons={Contents.about.slogan.buttons}
            description={Contents.about.slogan.description}
            title_mobile={Contents.about.slogan.title_mobile}
            title_desk={Contents.about.slogan.title_desk}
            img={Contents.about.slogan.img}
          />
          <EmptyGrayspace
            leftTitle="Nada de intermediários, só Clicampo!"
            RightDescription="Veniam irure consectetur reprehenderit ad occaecat ut do consequat. Cillum pariatur nisi id velit laborum fugiat sint et deserunt id. Veniam Lorem eu laboris voluptate incididunt cillum incididunt velit sint commodo elit velit duis. Culpa ad commodo nostrud excepteur. Consequat dolor commodo commodo quis sit do velit est irure mollit. Dolor aliqua est deserunt tempor aliqua dolore enim sint proident enim. Dolor labore nisi quis fugiat in aute."
          />
          <Testimonials />
          <EmptyGrayspace
            img="https://i.imgur.com/Gnwx3QB.png"
            RightTitle="Faça parte desta conexão"
            RightSubtitle="Commodo et non duis est aliquip dolore exercitation elit in duis occaecat occaecat ut."
          />
        </Container>
        <Newsletter />
        <Footer />
      </Template>
    </>
  )
}
