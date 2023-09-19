import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import { chakra } from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'

  
  export default function SignUp(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUP = async () =>{
        try {
            const submitUser = await createUserWithEmailAndPassword(auth, email, password)
            console.log(submitUser, 'submit user')
        } catch (error) {
            throw error
        }
    }


    return (
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading color={"#4C4B16"}
            >
              Sign Up
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="fg.muted">already have an account?</Text>
              <Button variant="text" size="lg">
                <Link to="/login">
               Log in
               </Link>
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={{
            base: 'transparent',
            sm: 'bg.surface',
          }}
          boxShadow={{
            base: 'none',
            sm: 'md',
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email" >Email</FormLabel>
                <Input id="email" type="email" onChange={(e)=> setEmail(e.target.value)}/>
                <FormLabel htmlFor="email" >Password</FormLabel>
                <Input id="password" type="password" onChange={(e)=> setPassword(e.target.value)}/>
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary" onClick={()=> handleSignUP()}>Sign Up</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    )
  }
