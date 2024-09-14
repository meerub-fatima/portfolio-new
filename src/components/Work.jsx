import { Box, Container, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'

function Work() {
  return (
    <Flex dis="flex"
    flexDir="column"
    align="center"
    p="0px, 50px"
    mt="150px"
    border="3px,solid,red">
      <Container pos="absolute" >

      <Heading as="h1"
       fontSize="5rem">Work</Heading>

      <Box dis="flex"
      flexWrap="wrap"
      gap="1.5rem"
      justify="center"
      mt="2rem" border="3px,solid,red">
        <Link href='#Work1' bgImage="https://images.unsplash.com/photo-1725714354686-0a8b522037bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8">
        <Box 
         w="430px"
         h="395px"
         bgSize="101%"
         bgPos="center"
         filter={{dropShadow: "0px,0px,0px, transperant"}}
         border="2px,solid,red"
         
         
        ></Box></Link>
        <Link href='#Work2'><Box w="430px"
         h="395px"
         bgSize="101%"
         bgPos="center"
         filter={{dropShadow: "0px,0px,0px, transperant"}}
         border="2px,solid,red"></Box></Link>
        <Link href='#Work3'><Box w="430px"
         h="395px"
         bgSize="101%"
         bgPos="center"
         filter={{dropShadow: "0px,0px,0px, transperant"}}
         border="2px,solid,red"></Box></Link>
        <Link href='#Work4'><Box w="430px"
         h="395px"
         bgSize="101%"
         bgPos="center"
         filter={{dropShadow: "0px,0px,0px, transperant"}}
         border="2px,solid,red"></Box></Link>
      </Box>
      </Container>
    </Flex>
  )
}

export default Work
