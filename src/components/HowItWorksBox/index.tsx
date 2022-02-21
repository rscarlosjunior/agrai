import { ArrowLeft, ArrowRightAlt } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

function HowItWorksBox() {
  const works = [
    {
      title: 'In pariatur fugiat laboris.',
      icon: 'https://i.imgur.com/9XjnDyO.png',
      description: 'Occaecat ea culpa ad tempor deserunt aute nostrud.',
      last: false
    },
    {
      title: 'In pariatur fugiat laboris.',
      icon: 'https://i.imgur.com/i17tvnU.png',
      description:
        'Labore ex ea aliquip ullamco cupidatat sunt ad ad nulla esse officia sunt amet aute.',
      last: false
    },
    {
      title: 'In pariatur fugiat laboris.',
      icon: 'https://i.imgur.com/rg6Dc7b.png',
      description:
        'Eiusmod anim id voluptate ad voluptate voluptate tempor cupidatat cupidatat.',
      last: false
    },
    {
      title: 'In pariatur fugiat laboris.',
      icon: 'https://i.imgur.com/FV0czJr.png',
      description: 'Veniam sit labore adipisicing tempor non adipisicing.',
      last: true
    }
  ]
  return (
    <>
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent="flex-start"
        alignItems="center"
        mb="30px"
        mt="20px"
      >
        <Typography variant="h4" fontWeight="300" color="#7a7a7a">
          Como funciona:
        </Typography>
      </Box>
      <Box
        maxWidth="966px"
        margin="auto"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        {works.map((item) => (
          <>
            <Box
              width={210}
              height={260}
              padding="16px"
              bgcolor="transparent"
              border="1px solid #4FB862"
              borderRadius="5px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                width="100%"
                mb="36px"
                display="flex"
                justifyContent="center"
              >
                <img width={50} height={50} src={item.icon} />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  textAlign="center"
                  fontWeight="300"
                  color="#7a7a7a"
                  variant="h5"
                >
                  {item.title}
                </Typography>
                <Typography
                  textAlign="center"
                  fontWeight="300"
                  color="#7a7a7a"
                  variant="subtitle1"
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
            {!item.last && (
              <Box color="#cdcdcd">
                <ArrowRightAlt width={1} height="20px" />
              </Box>
            )}
          </>
        ))}
      </Box>
    </>
  )
}

export default HowItWorksBox
