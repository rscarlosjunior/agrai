import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from '@mui/material'

export const Hcontent = styled.div`
  flex-direction: row;
  margin: 10px 0 10px 0;
  width: 100%;
  max-width: 966px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 798px) {
    margin: 0 auto;
  }
  .styled-button {
    max-width: 150px;
    width: 100%;
    max-height: 35px;
    border: 1px solid #a4a4a4;
  }
  .menu-hover {
    cursor: pointer;
    display: inline-block;
    position: relative;
  }

  .menu-hover:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #a4a4a4;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .menu-hover:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .active {
    font-weight: bold;
  }
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  width: 100%;
`

export const IconSpacing = styled.div`
  margin: 0px 5px 0px 5px;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 798px) {
    justify-content: flex-start;
    margin-left: 48px;
  }
`
export const MyAccount = styled.span`
  font-size: 15px;
  color: #7a7a7a;
`

export const Total = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background-color: #f8475f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function HeaderItem({ pathname, name }: any) {
  const [active, setActive] = useState(false)

  function isActived() {
    const path = location.pathname
    if (path === pathname) {
      setActive(true)
      return
    }
    setActive(false)
  }

  useEffect(() => {
    isActived()
  }, [])

  return (
    <Link to={pathname}>
      <Typography
        className={active ? 'menu-hover active' : 'menu-hover'}
        fontWeight="300"
        color="#7a7a7a"
        fontSize={16}
        paddingRight="16px"
      >
        {name}
      </Typography>
    </Link>
  )
}
