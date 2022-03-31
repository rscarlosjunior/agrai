import React from 'react'
import { whatsapp, instagram, linkedin } from '@/pages/utils'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box } from '@mui/material'

interface SocialMediaProps {
  color: string
  size?: "small" | "inherit" | "large" | "medium"
}

function SocialMedia({ color, size='large' }: SocialMediaProps) {
  return (
    <Box
      display="flex"
      width="100%"
      maxWidth="90px"
      justifyContent="space-between"
      flexDirection="row"
    >
      <div style={{ cursor: 'pointer' }} onClick={() => instagram()}>
        <InstagramIcon fontSize={size} style={{ color: `${color}` }} />
      </div>
      <div style={{ cursor: 'pointer' }} onClick={() => linkedin()}>
        <LinkedInIcon fontSize={size} style={{ color: `${color}` }} />
      </div>
      <div style={{ cursor: 'pointer' }} onClick={() => whatsapp()}>
        <WhatsAppIcon fontSize={size} style={{ color: `${color}` }} />
      </div>
    </Box>
  )
}

export default SocialMedia
