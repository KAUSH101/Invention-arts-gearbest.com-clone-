import { ReactNode } from 'react';

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Text,
  Input,

} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {FaRegUser, FaSearch} from "react-icons/fa"
import {FiHeart} from "react-icons/fi"
import {GrCart} from "react-icons/gr"


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const style = { color:"black", height: "24px",width:"24px"}
  const stylep = {  color:"gray",fontSize:"20px",marginTop:"50px"}
  const styleSpan = {  color:"white", background:"red",marginLeft:"80%",width:"20%",borderRadius:"90%",marginTop:"5px"}
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
<Image
marginTop="50px"
height="130px"
width="130px"
src="https://images-platform.99static.com//pWE2G5QeOLg6uoK3dzt3FionJZ0=/385x0:1621x1236/fit-in/590x590/99designs-contests-attachments/59/59115/attachment_59115475"
/>

          </Box>

          <Center
          marginTop="50px"
        //   border="0px solid yellow"
          borderRadius="10px"
          width="35%"
          height="40px"
          justifyContent="space-between"
          background="yellow"
          >
           
<Input
border="none "
outline="none"
width="92%"
height="36px"
borderTopLeftRadius="10px"
borderBottomLeftRadius="10px"
 placeholder='Search' />
       <FaSearch />
       
          </Center>
         
         <Flex
          marginTop="30px"
        //  border="1px solid red"
         width="30%"
        justifyContent="space-between">
           

           <Stack>
   
           <p
         
style={stylep}
>
   
    <FaRegUser
    
         style={style}
         /> Sign In
         </p>


           </Stack>
                





          


       
        
<p
style={stylep}
>
<FiHeart

      style={style}
     /> Favourite
    
</p>


   
     <p
      style={stylep}
     >
<GrCart
        style={style}
        /> cart
        
</p>



         </Flex>
    
         
      
        
         
     
         
         
       

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}

            
            </Stack>
          </Flex>
        </Flex>
      </Box>
    
    </>
  );
}