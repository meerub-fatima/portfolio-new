import { Flex, Link, SimpleGrid , Box, Drawer , DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Text,} from '@chakra-ui/react'
  import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import React from 'react'
import { AiFillHome } from "react-icons/ai";

function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SimpleGrid
     zIndex="999999"
     color="#fff"
      pos="fixed"
       w="100%" bg="gray.800"
    columns="2" p='4'
     paddingInline="10"
      textTransform="uppercase"
     display="grid" 
     justify="space-between" align="center" 
     filter={" dropShadow 5px, 5px, 10px, transprent"} >

     <Flex >
      <Text
       fontSize='2rem'
        ml="0.5rem"
       transition="All 0.15s ease-in-out , filter 0.5s"
        cursor="pointer"
         _hover={{  color : "blue.300"} }  >Maleeha.dev </Text>

      <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon  />}
          onClick={onOpen}
          ml={{base: "2rem" , md: "25rem" , lg: "60rem"}}
           fontWeight="800"
            fontSize="1.2rem" />
        </Flex>

        <Drawer
         isOpen={isOpen} onClose={onClose} placement="right">

        <DrawerOverlay  />
        <DrawerContent bg = "purple.200"  >
          <DrawerCloseButton />
          <DrawerHeader  >Navigation</DrawerHeader>
          <DrawerBody >
            <CloseIcon mt="2rem" onClick={onClose} />
            </DrawerBody>
     
     <Flex
      align="center" 
       justify="space-evenly" 
       dir="flex" flexDir="column"
      pos="absolute" top="150" ml="8rem">
      <Link href='#Home' mb={4} onClick={onClose} fontSize="1.5rem" >home <AiFillHome/></Link>
      <Link href='#About' mb={4} onClick={onClose} fontSize="1.5rem">About</Link>
      <Link href='#Work' mb={4} onClick={onClose} fontSize="1.5rem">Work</Link>
     </Flex>
        </DrawerContent>
      </Drawer>
     </SimpleGrid>
  )
}

export default Header
 