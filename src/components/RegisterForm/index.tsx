import React from 'react'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { StyledForm } from '@/pages/ClientRegister/styles'
import { Input } from '@/components/InputRegister'
import { Box, Checkbox, Typography } from '@mui/material'
import { Lead } from '@/services/register'

function RegisterForm() {
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Favor digitar um e-mail válido')
      .required('Favor preencher corretamente o campo.'),
    name: yup.string().required('Favor preencher corretamente o campo.'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Número não é valido'),
    address: yup.string().required('Favor preencher corretamente o campo.'),
    checkbox: yup.boolean()
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmitHandler = (data: any) => {
    const body = {
      contact: {
        email: data.email,
        firstName: data.name,
        phone: data.phoneNumber,
        fieldValues: [{ field: '4', value: data.address }]
      }
    }
    Lead(body)
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          {...register('name')}
          placeholder="Digite seu nome"
          type="text"
          required
        />
        <Typography fontSize={12} color="red">
          {errors.name?.message}
        </Typography>
        <Input
          {...register('email')}
          placeholder="Digite seu e-mail"
          type="email"
          required
        />
        <Typography fontSize={12} color="red">
          {errors.email?.message}
        </Typography>
        <Input
          {...register('phoneNumber')}
          placeholder="Seu Whatsapp - Exemplo 279990999"
          type="tel"
          required
        />
        <Typography fontSize={12} color="red">
          {errors.phoneNumber?.message}
        </Typography>
        <Input
          {...register('address')}
          placeholder="Digite seu endereço"
          type="text"
          required
        />
        <Typography fontSize={12} color="red">
          {errors.address?.message}
        </Typography>
        <Box mt="16px" width="100%" justifyContent="center" alignItems="center">
          <LoadingButton
            type="submit"
            loading={false}
            variant="contained"
            style={{
              backgroundColor: '#4fb849',
              color: 'white',
              display: 'flex',
              width: '100%',
              maxWidth: '350px',
              flexDirection: 'row',
              height: '48px',
              border: '1px solid #dadada',
              fontSize: '12px',
              fontWeight: 300,
              margin: 'auto',
              borderRadius: '5px',
              boxShadow: 'none'
            }}
          >
            Enviar dados
          </LoadingButton>
        </Box>
        <Box
          pt={{ xs: '8px', md: '16px' }}
          pb="8px"
          margin="auto"
          display="flex"
          width="100%"
          maxWidth="350px"
        >
          <Checkbox
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            {...register('checkbox')}
            defaultChecked
          />
          <Typography
            textAlign="center"
            maxWidth="350px"
            margin="auto"
            typography="h6"
            color="#7a7a7a"
          >
            Aceito compartilhar meus dados e receber informações sobre a Agrai.
          </Typography>
        </Box>
      </StyledForm>
    </>
  )
}

export default RegisterForm
