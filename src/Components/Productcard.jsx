// product card
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,

} from '@chakra-ui/react';
import {Link as RouterLink} from "react-router-dom"

// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function ProductCard({image,id,title,price,price2}) {
  return (
    <Center py={12}>
      
      <RouterLink  to={`/phones/${id}`} >
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            // backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <div style={{background:"#eff0af"}} >
        <Stack pt={10} align={'center'}>
          <Text noOfLines={3} textDecoration={'none'} color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
            {title}
          </Text>
     
          <Stack direction={'row'} align={'center'}>
            <Text textDecoration={'none'}  color={'tomato'} fontWeight={800} fontSize={'xl'}>
             ${price}
            </Text>
            <Text color={'gray'} textDecoration={'line-through'} > 
            ${price2}
            </Text>
          </Stack>
       
       
        </Stack>
        </div>
      </Box>
      </RouterLink>
    </Center>
  );
}