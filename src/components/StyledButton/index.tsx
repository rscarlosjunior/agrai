import { Button, Typography, Box } from '@mui/material'
import React from 'react'

type IButtonProps = {
  icon?: string
  description?: string
}
function StyledButton({ icon, description }: IButtonProps) {
  return (
    <Button style={{
      maxWidth:'150px',
      width:'100%',
      border: '1px solid #a4a4a4',
      maxHeight:'36px'
    }} className="styled-button">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box fontSize={20} mr={1}>
          {icon}
        </Box>
        <Typography fontWeight="300" color="#7a7a7a" fontSize={10}>
          {description}
        </Typography>
      </Box>
    </Button>
  )
}

export default StyledButton
