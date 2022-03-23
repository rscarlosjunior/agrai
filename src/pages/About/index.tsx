import React, { useEffect, useMemo, useState } from 'react'
import { Header } from '@/components/Header'
import { Container, Template } from '@/styles/styles'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'
import Slogan from '@/components/Slogan'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box } from '@mui/material'
import Testimonials from '@/components/Testimonials'
import { Contents, filterDatas, variables } from '@/pages/utils'
import EmptyGrayspace from '@/components/EmptyGrayspace'
import { usePrismic } from '@/hooks/usePrismic'

export const About: React.FC = () => {
  const { results } = usePrismic()
  const [aboutContent, setAboutContent] = useState()

  useEffect(() => {
    getContent()
  }, [results])

  const getContent = () => {
    if (!results) return null
    const content = results.filter((item) => item.id === variables.PAGES.ABOUT)
    setAboutContent(content)
  }

  const slogan = useMemo(() => {
    if (!aboutContent) return null
    const slogan = filterDatas(variables.TYPES.SLOGAN, aboutContent)

    return (
      <Slogan
        buttons={slogan?.firstbutton[0]?.text || slogan?.secondbutton[0]?.text}
        description={slogan.slogandescription[0].text}
        title_mobile={slogan.pagetitle[0].text}
        title_desk={slogan.pagetitle[0].text}
        img={slogan.img.url}
      />
    )
  }, [aboutContent])

  const testimonials = useMemo(() => {
    if (!aboutContent) return null
    return <Testimonials content={filterDatas(variables.TYPES.TESTIMONIALS, aboutContent)} />
  }, [aboutContent])

  return (
    <>
      <Template>
        <Container>
          <Box borderBottom={1} borderColor="#dadada" p="5px">
            <Header />
          </Box>
          {slogan}
          <EmptyGrayspace
            leftTitle="Nada de intermediários, só Clicampo!"
            RightDescription="Veniam irure consectetur reprehenderit ad occaecat ut do consequat. Cillum pariatur nisi id velit laborum fugiat sint et deserunt id. Veniam Lorem eu laboris voluptate incididunt cillum incididunt velit sint commodo elit velit duis. Culpa ad commodo nostrud excepteur. Consequat dolor commodo commodo quis sit do velit est irure mollit. Dolor aliqua est deserunt tempor aliqua dolore enim sint proident enim. Dolor labore nisi quis fugiat in aute."
          />
          {testimonials}
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
