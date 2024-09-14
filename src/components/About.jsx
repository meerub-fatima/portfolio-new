import React from 'react'
import  { Box, Flex , Text, Heading, Img } from '@chakra-ui/react'
 
function About() {



  return (
<Flex
 dis="flex"
 borderTopColor="gery.500"
 borderTopStyle="solid"
 borderTopWidth="3px" >
<Box
display= "flex" 
 p="0px,82px"
 gap="120px"
 
 >

 <Heading as="h1"
  fontWeight="800"
  fontSize="4rem"
  mt="5rem"
  ml="3rem"
  >   
  ABOUT
 </Heading>
<Flex 
flexDir="column"
w= "50vw">
 <Text 
  fontSize="2.5rem"
  mt="5rem">
  Welcome to my corner of Web! I'm <Box as="b" color="teal.600">Maleeha Usman</Box>.</Text>

  <Text as="i"
     fontStyle="normal"
     opacity="0.8"
     fontSize="2xl" >
      a passionate web designer dedicated to crafting memorable online experinces.
      </Text>
      </Flex>
  </Box>

</Flex>   
  )
}

export default About
