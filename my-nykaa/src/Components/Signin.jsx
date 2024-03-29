import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { AppContext } from './Context/AuthContext';
import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SimpleCard() {
  const toast=useToast();
  const {email,pass,name}= useContext(AppContext);
  // console.log(email,pass,name)
  const navigate=useNavigate();

  const [checkemail,setcheckemail]=useState(null);
  const [checkpass,setcheckpass]=useState(null);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={checkemail} onChange={(e)=>setcheckemail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={checkpass} onChange={(e)=>setcheckpass(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={()=>{
                  if(checkemail==email&&checkpass==pass){
                    toast({
                      title: "Sign In Success",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                      position:"top"
                    });
                    localStorage.setItem("name",JSON.stringify(name));
                    // console.log("Success")
                    navigate("/");
                  }
                }}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}