import React, { useState } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Features from './Features'



export default function Home(props) {
  return (
    <div>
        <Navbar name={props.name}>

        </Navbar>
        <Main>

        </Main>
        <Features></Features>
    </div>
  )
}
