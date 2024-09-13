import React from 'react'
import  { Box, Flex , Text, VStack } from '@chakra-ui/react'
 
function About() {



  return (
<Flex
 dis="flex"
 border="2px, solid, red"
 >

<Box
display="flex" 
 p="0px,82px"
 gap="120px"
 border="2px,solid,red">

 <Box as="h1"
  fontWeight="700"
  border="2px,solid,red"
  mt="2rem"
  ml="3rem"
 >
  ABOUT
 </Box>

 <Text 
  fontSize="2.5rem"
  mt="1rem">
  Welcome to my corner of Web! I'm <Box as="b" color="teal.600">MAleeha USman</Box>.</Text>
  
  
</Box>
<Text as="i"
     fontStyle="normal"
     opacity="0.5"
     fontSize="2xl"
     border="2px,solid,red" >
      a passionate web designer dedicated to crafting memorable online experinces.</Text>
</Flex>   
  )
}

export default About
