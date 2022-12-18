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
  import {Link} from "react-router-dom"
  import Navbar from '../Components/Navbar';
  import Footer from '../Components/Footer';

//   import Model from '../Components/Modal';
  export default function Cart() {

const [cart,setCart] = useState({})
const [count,setCount] = useState(1)
const {id} = useParams()

useEffect(()=>{
    axios
    .get(`https://json-fev1.onrender.com/phones/${id}`)
    .then(({data})=>{
        setCart(data)
    })
    .catch((err)=>console.log(err))
},[id])
const {image,title,price,price2}=cart

function add(){
    setCount(count+1)
}
function sub(){
    setCount(count-1)
}
    return (
        <div>
            <Navbar/>
      <Center py={12}>
        
        <Box 
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
        //   boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          justifyContent={'center'}
      
          alignItems={'center'}
          boxShadow= {"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
          >
            
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
            <Text style={{color:"gray"}}   color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {title}
            </Text>
          
            <Stack direction={'row'} align={'center'}>
              <Text style={{color:"tomato"}}   fontWeight={800} fontSize={'xl'}>
                {price}
              </Text>
              <Text style={{color:"gray"}}   textDecoration={'line-through'} color={'gray.600'}>
                {price2}
              </Text>
            </Stack>
          <Flex>
            <button style={{border:"none" , color:"red"}}  onClick={()=>sub(-1)}>-</button>
            <Text   >{count}</Text>
                <button style={{border:"none" , color:"green"}}  onClick={()=>add(1)} >+</button>
                </Flex>
                <Text style={{color:"tomato"}}  >
                    Total price:{count*price}
                </Text>
          
          </Stack>
          {/* linking model(popup) on click */}
          <Link to={"/login"} >   <button style={{marginTop:"12px",width:"100%",background:"green",color:"white",border:"none",height:"32px",cursor:"pointer"}}   >Check Out</button></Link>
   
        </Box>
        
      </Center>
      <Footer/>
      </div>
    );
  }