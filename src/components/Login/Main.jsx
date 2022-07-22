import React from 'react'
import { Box } from '@chakra-ui/react'
import bg from './mainbg.png'
import { Login } from './Login'

export const Main = () => {
  return (
    <Box bg='black' w='100%' h='100vh' bgImage={bg} bgPosition='right' bgSize='contain' bgRepeat='no-repeat'>
        <Login />
    </Box>
  )
}
