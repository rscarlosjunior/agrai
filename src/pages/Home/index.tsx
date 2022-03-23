import React, { useEffect, useMemo, useState } from 'react'
import { Header } from '../../components/Header'
import { Container, Template } from '../../styles/styles'
import { Newsletter } from '../../components/Newsletter'
import { Footer } from '../../components/Footer'
import { Box } from '@mui/material'
import { usePrismic } from '../../hooks/usePrismic'
import { variables, filterDatas } from '../utils'
import Slogan from '../../components/Slogan'
import HowItWorksBox from '../../components/HowItWorksBox'
import Numbers from '../../components/Numbers'
import Differentials from '../../components/Differentials'
import Testimonials from '../../components/Testimonials'
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

  const slogan = useMemo(() => {
    if (!homeContent) return null
    const slogan = filterDatas(variables.TYPES.SLOGAN, homeContent)
    return (
      <Slogan
        buttons={slogan.firstbutton[0].text || slogan.secondbutton[0].text}
        firstButton={slogan.firstbutton[0].text}
        firstButtonLink={slogan.firstbuttonlink[0].text}
        secondButton={slogan.secondbutton[0].text}
        secondButtonLink={slogan.secondbuttonlink[0].text}
        description={slogan.slogandescription[0].text}
        title_mobile={slogan.pagetitle[0].text}
        title_desk={slogan.pagetitle[0].text}
        img={slogan.img.url}
      />
    )
  }, [homeContent])

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
          {slogan}
          {boxes}
          {numbers}
          {differentials}
          {testimonials}
        </Container>
        <Newsletter />
        <Footer />
      </Template>
    </>
  )
}
