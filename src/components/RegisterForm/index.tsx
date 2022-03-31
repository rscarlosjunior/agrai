import React, {useEffect} from 'react'

import { useMediaQuery } from '@mui/material'
import './styles.css'
interface RegisterFormProps{
  id: number
}
function RegisterForm({id}:RegisterFormProps) {
  const xs = useMediaQuery('(max-width:797px)')

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://agraiflv.activehosted.com/f/embed.php?id=${id}`;
    script.async = true;

    document.body.appendChild(script);
  }, [])

  return (
    <>
    {!xs ? (
      <div style={{width: '100%'}} className={`_form_${id}`}></div>
    ): (
      <div style={{width: '100%', marginBottom: '32px'}} className={`_form_${id}`}></div>
    )}
      
    </>
  )
}

export default RegisterForm
