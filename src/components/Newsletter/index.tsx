import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Input } from './styles'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Typography } from '@mui/material'

export const Newsletter = () => {
  const [assign, setAssign] = useState(false)
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Favor digitar um e-mail válido')
      .required('Favor preencher corretamente o campo.')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmitHandler = () => {
    setAssign(true)
  }

  const goBackToAssign = () => {
    setAssign(false)
  }
  return (
    <Box mt="32px" borderTop="1px solid #dadada">
      {!assign ? (
        <>
          <Box width="100%" bgcolor="white" maxWidth={752} m="auto">
            <Typography
              textAlign='center'
              justifyContent="center"
              mt="16px"
              display="flex"
              variant="h4"
              fontWeight="300"
              color="#7a7a7a"
            >
              Inscreva-se para receber nossos conteúdos e atualizações.
            </Typography>
          </Box>
          <Box
            display="flex"
            width="100%"
            mt="16px"
            mb="16px"
            justifyContent="center"
            alignItems="center"
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            <Box
              display="flex"
              m="5px"
              alignItems="center"
              width="100%"
              maxWidth={280}
              justifyContent="center"
              flexDirection="column"
            >
              <Input
                {...register('email')}
                placeholder="Digite seu e-mail"
                type="email"
                required
              />
              <Typography fontSize={12} color="red">
                {errors.email?.message}
              </Typography>
            </Box>
            <Box
              m="5px"
              width="100%"
              maxWidth={{ xs: 280, md: 140 }}
              mt={{ xs: '5px', md: 'unset' }}
            >
              <LoadingButton
                onClick={handleSubmit(onSubmitHandler)}
                loading={false}
                variant="contained"
                style={{
                  marginBottom: errors.email?.message ? '15px' : '',
                  backgroundColor: 'transparent',
                  color: '#7a7a7a',
                  width: '100%',
                  flexDirection: 'row',
                  height: '48px',
                  border: '1px solid #dadada',
                  fontSize: '12px',
                  fontWeight: 300,
                  borderRadius: '5px',
                  boxShadow: 'none'
                }}
              >
                Cadastrar 🍎
              </LoadingButton>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box width="100%" bgcolor="white" maxWidth={752} m="auto">
            <Typography
              textAlign='center'
              justifyContent="center"
              mt="16px"
              display="flex"
              variant="h4"
              fontWeight="300"
              color="#7a7a7a"
            >
              Inscrição realizada com sucesso!
            </Typography>
            <Typography
              textAlign='center'
              justifyContent="center"
              mt="16px"
              maxWidth={{xs:350, md:'unset'}}
              margin={{xs:'auto', md:'unset'}}
              paddingTop={{xs:'8px', md:'unset'}}
              display="flex"
              variant="h6"
              fontWeight="300"
              color="#7a7a7a"
            >
              Agora você irá receber todas as nossas novidades e conteúdos por e-mail.
            </Typography>
            </Box>
          <Box
            display="flex"
            minHeight={{xs:'126px', md:'unset'}}
            width="100%"
            mb="16px"
            alignItems='center'
            justifyContent="center"
          >
            <Box m="5px" width="100%" maxWidth={280}>
              <LoadingButton
                onClick={goBackToAssign}
                loading={false}
                variant="contained"
                style={{
                  marginBottom: errors.email?.message ? '15px' : '',
                  backgroundColor: '#000000',
                  color: 'white',
                  width: '100%',
                  flexDirection: 'row',
                  height: '48px',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 700,
                  borderRadius: '5px'
                }}
              >
                Cadastrar novo e-mail
              </LoadingButton>
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}
