import React, { useEffect, useMemo, useState } from 'react'
import { Header } from '@/components/Header'
import { Container, Template } from '@/styles/styles'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'
import Slogan from '@/components/Slogan'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box } from '@mui/material'
import HowItWorksBox from '@/components/HowItWorksBox'
import Numbers from '@/components/Numbers'
import Differentials from '@/components/Differentials'
import Testimonials from '@/components/Testimonials'
import { usePrismic } from '@/hooks/usePrismic'

export const Agrai: React.FC = () => {
  const { results } = usePrismic()
  const [homeContent, setHomeContent] = useState()

  useEffect(() => {
    getContent()
  }, [results])

  const getContent = () => {
    if (!results) return null
    console.log(results)
    const content = results.filter((item) => item.id === 'home')
    setHomeContent(content)
  }

  const memoizedSlogan = useMemo(() => {
    if (!homeContent) return null
    const filter = homeContent.filter((item) => item.type === 'slogan')
    const slogan = filter[0].data

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

  const memoizedBoxes = useMemo(() => {
    if (!homeContent) return null
    const filter = homeContent.filter((item) => item.type === 'carousel')
    const array = filter[0].data.items

    let items = []
    array.forEach((element) => {
      const item = {
        title: element.title[0].text,
        description: element.description[0].text,
        icon: element.img[0].text
      }
      items.push(item)
    })
    return <HowItWorksBox content={items} />
  }, [homeContent])

  const memoizedNumbers = useMemo(() => {
    if (!homeContent) return null
    const filter = homeContent.filter((item) => item.type === 'agrainum')
    const array = filter[0].data.content
    let items = []
    array.forEach((element) => {
      const item = {
        title: element.title[0].text,
        description: element.description[0].text,
        value: element.value
      }
      items.push(item)
    })
    return <Numbers content={items} />
  }, [homeContent])

  return (
    <>
      <Template>
        <Container>
          <Box borderBottom={1} borderColor="#dadada" p="5px">
            <Header />
          </Box>
          {memoizedSlogan}
          {memoizedBoxes}
          {memoizedNumbers}
          <Differentials />
          <Testimonials />
        </Container>
        <Newsletter />
        <Footer />
      </Template>
    </>
  )
}
