import React, {useEffect} from 'react'

import { useMediaQuery } from '@mui/material'

function RegisterForm() {
  const xs = useMediaQuery('(max-width:797px)')

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://agraiflv.activehosted.com/f/embed.php?id=5";
    script.async = true;

    document.body.appendChild(script);
  }, [])

  return (
    <>
    {!xs ? (
      <div style={{width: '100%', padding: '16px'}} className="_form_5"></div>
    ): (
      <div style={{width: '100%', marginBottom: '32px'}} className="_form_5"></div>
    )}
      
    </>
  )
}

export default RegisterForm
