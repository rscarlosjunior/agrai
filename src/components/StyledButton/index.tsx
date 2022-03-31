import { Button, Typography, Box } from '@mui/material'
import React from 'react'
import { BoxShadow } from './styles'

type IButtonProps = {
  icon?: string
  description?: string
}
function StyledButton({ icon, description }: IButtonProps) {
  return (
    <BoxShadow>
      <Button style={{
        maxWidth:'150px',
        width:'100%',
        backgroundColor: '#50b848',
        maxHeight:'36px'
      }} className="styled-button">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box fontSize={20} mr={1}>
            {icon}
          </Box>
          <Typography fontWeight="bold" color="white" fontSize={10}>
            {description}
          </Typography>
        </Box>
      </Button>
    </BoxShadow>
  )
}

export default StyledButton
