// checkout page
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
  } from '@chakra-ui/react';
  import {useParams} from "react-router-dom"
  import { useEffect,useState } from 'react';
  import axios from 'axios';
  import Model from '../Components/Modal';
  export default function Cart() {

const [cart,setCart] = useState({})
const [count,setCount] = useState(1)
const {id} = useParams()

useEffect(()=>{
    axios
    .get(`http://localhost:3004/phones/${id}`)
    .then(({data})=>{
        setCart(data)
    })
    .catch((err)=>console.log(err))
},[id])
const {image,description,title,price,category}=cart

function add(){
    setCount(count+1)
}
function sub(){
    setCount(count-1)
}
    return (
      <Center py={12}>
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
            //   backgroundImage: `url(${IMAGE})`,
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
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {title}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {description}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {price*1.2}
              </Text>
            </Stack>
          <Flex>
            <button  onClick={()=>sub(-1)}>-</button>
            <Text   >{count}</Text>
                <button onClick={()=>add(1)} >+</button>
                </Flex>
                <Text>
                    Total price:{count*price}
                </Text>
          
          </Stack>
          {/* linking model(popup) on click */}
          <Model/>
        </Box>
      </Center>
    );
  }