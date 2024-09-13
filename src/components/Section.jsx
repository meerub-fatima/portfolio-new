import React from 'react'
import { SimpleGrid, Flex, Text, Box, Img, Button, VStack } from '@chakra-ui/react'
import { FiInstagram , FiLinkedin , } from "react-icons/fi";
import {FaFacebookSquare} from "react-icons/fa";



function Section() {





  return (
    <SimpleGrid 
     columns={ {base : "1",md : "1",lg : "2"} } 
     p="10"bg="gery.700"
      zIndex="22"  >

    <Flex
     flexDir="column" 
      justify="center" 
      w={ {base : "100%",md : "100%",lg : "80%"}} >
        <Text fontSize="2rem" fontWeight="bold" >Maleeha Usman</Text>
        <Text fontSize="2rem">Hi I am a frontend web developer.</Text>
    <Button border="2px solid gray" bg="yellow.300" _hover={{ w : "18rem", h : "5rem", fontSize :  "2rem",boxShadow: "2xl" }} w="10rem"  transition="all 0.8s ease-in-out">Contact Me</Button>
    </Flex>

    <Flex 
      align="center" 
      justify="center" pt="10"  >
        <Img 
        borderRadius="10rem"
         boxSize={{base:"12rem", md:"18rem", lg:"20rem"}} 
          sx={{ filter: 'blur(1px) brightness(0.8) contrast(1.2)' }}
            src="data:image/jpeg;base64,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" />
    </Flex>

    <Flex
     dir="flex"
      justify="center"
       align="center">

      <Box
       align="center"
        pos="absolute" 
        display={'inline-flex'}
         fontSize="2rem"
          gap="4"
           mt={{base:"3rem", md:"4rem", lg:"6rem"}}
            p="4" >

       <Box
        color={'blue.500'}><FaFacebookSquare /></Box> 

        <Box><FiInstagram /></Box>

        <Box><FiLinkedin /></Box>
      </Box>
      </Flex>
      
      <VStack>
        <Box
         as="h1" textTransform="uppercase"
          mt="8"
           p="4">

          <Text 
           sx={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>web designer</Text>
          </Box>
        </VStack>
      
    </SimpleGrid>
  )
}

export default Section
