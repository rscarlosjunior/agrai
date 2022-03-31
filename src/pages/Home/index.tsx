import React, { useEffect, useMemo, useState } from 'react'
import { Header } from '@/components/Header'
import { Container, Template } from '@/styles/styles'
import { Footer } from '@/components/Footer'
import { Box } from '@mui/material'
import { usePrismic } from '@/hooks/usePrismic'
import { variables, filterDatas } from '../utils'
import Slogan from '@/components/Slogan'
import HowItWorksBox from '@/components/HowItWorksBox'
import Numbers from '@/components/Numbers'
import Differentials from '@/components/Differentials'
import Testimonials from '@/components/Testimonials'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const Agrai: React.FC = () => {
  const { results } = usePrismic()
  const [homeContent, setHomeContent] = useState()

  useEffect(() => {
    getContent()
  }, [results])

  const getContent = () => {
    if (!results) return null
    const content = results.filter((item) => item.id === variables.PAGES.HOME)
    setHomeContent(content)
  }

  const boxes = useMemo(() => {
    if (!homeContent) return null
    return <HowItWorksBox content={filterDatas( variables.TYPES.CAROUSEL, homeContent)} />
  }, [homeContent])

  const numbers = useMemo(() => {
    if (!homeContent) return null
    return <Numbers content={filterDatas(variables.TYPES.NUMBER, homeContent)} />
  }, [homeContent])

  const differentials = useMemo(() => {
    if (!homeContent) return null
    return <Differentials content={filterDatas(variables.TYPES.DIFF, homeContent)} />
  }, [homeContent])

  const testimonials = useMemo(() => {
    if (!homeContent) return null
    return <Testimonials content={filterDatas(variables.TYPES.TESTIMONIALS, homeContent)} />
  }, [homeContent])

  return (
    <>
      <Template>
        <Container>
          <Box borderBottom={1} borderColor="#dadada" p="5px">
            <Header />
          </Box>
          <Slogan
            buttons={true}
            firstButton='Quero comprar'
            firstButtonLink='/cadastro-produtor'
            secondButton='Quero vender'
            secondButtonLink='/cadastro-cliente'
            description='Facilitamos o processo de compra de FLV orgânico das empresas.'
            title_mobile='Conectando o campo à cidade.'
            title_desk='Conectando o campo à cidade.'
            img='https://i.imgur.com/yRkUnLG.png'
          />
          {boxes}
          {numbers}
          {differentials}
          {testimonials}
        </Container>
        <Footer />
      </Template>
    </>
  )
}
