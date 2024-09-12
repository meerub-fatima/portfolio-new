import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Work from './components/Work'
import Section from './components/Section'

import { Box } from '@chakra-ui/react';
import React from 'react';


function App() {
 

  return (
    <Box  fontFamily="SUSE" sans-serif w="99vw" >
    <Header/>
    <Box pt="4rem" >
    <Home/>
    <Section/>
    <About/>
    <Work/>
    </Box>
     </Box>
  )
}

export default App
