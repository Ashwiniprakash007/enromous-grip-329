import React from 'react'
import logo from './logo.png'
import pointer from './pointer.png'
import { Box , Image , Heading , FormControl , FormLabel , Input , Select , Divider , Button} from '@chakra-ui/react';


import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { useState } from 'react'

export const Checkout = () => {

    const [count,setCount] = useState(1);
    const [total,setTotal] = useState(579)
 
    const dec = () => {
        if(count>1){
            setCount(count-1);
            setTotal(total-579);
        }
    }

    const inc = () => {
        setCount(count+1);
        setTotal(total+579);
    }


  return (

    // Main container
    <Box bg='#0D0F12' w='100%' minH='100vh' pt='2ch'>

        <Image src={logo} w='15%' />
        <Image src={pointer} m='auto' w='25%'/>

        {/* Box contain Account details and Order summary */}
        <Box w='70%' m='auto' display='flex' mt='4ch'>

            {/* Account details Box starts here */}
            <Box w='56%' bg='#181C20' p='2ch'  h='550px'>
                <Heading as='h1' size='xl' color='white'>Account Details</Heading>


                 {/* Box Contain Form starts Here */}
                <Box w='100%' display='flex'>

                {/* Left form starts here */}
                <FormControl w='46%' position='left' color='white'>

                  <FormLabel mt='3ch' fontSize='15px'>First Name</FormLabel>
                  <Input bg='white' color='black' h='6ch' type='text' />

                  <FormLabel mt='3ch' fontSize='15px'>Email</FormLabel>
                  <Input bg='white' color='black' h='6ch' type='email' />

                  <FormLabel mt='3ch' fontSize='15px'>Contact Phone Number</FormLabel>
                  <Input bg='white' color='black' h='6ch' type='number' />

                  <FormLabel mt='3ch' fontSize='15px'>Company Name</FormLabel>
                  <Input bg='white' color='black' h='6ch' type='text' />

                </FormControl>
                {/* Left form ends here */}


                {/* Right side form starts here */}
                <FormControl w='46%' position='right' ml='4%' color='white'>

                  <FormLabel mt='3ch' fontSize='15px'>Last Name</FormLabel>
                  <Input bg='white' color='black' h='6ch' type='text' />

                  <FormLabel mt='3ch' fontSize='15px'>Confirm Email</FormLabel>
                  <Input bg='white' color='black' h='6ch' type='email' />

                  <FormLabel mt='3ch' fontSize='15px'>Country of residence</FormLabel>
                  <Select bg='white' color='black' h='6ch' placeholder='Select country'>
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                  </Select>

                </FormControl>
                {/* Right side form ends here */}
                </Box>
                {/* Box Contain Form Ends Here */}


                <Divider mt='5ch' />
                <Button mt='5ch' color='white' bg='#0084BD' w='20ch' h='7ch' _hover={{opacity:'0.7'}}>Continue</Button>
            </Box>
            {/* Account Details Box ends Here */}



            {/* Order Summary Box */}
            <Box w='42%' h='400px' bg='#181C20' ml='2%' p='2ch'>
                <Heading as='h1' size='xl' color='white'>Order Summary</Heading>

                {/* Table starts here */}
                <TableContainer mt='5ch'>
                  <Table size='2xl' color='white' variant='unstyled'>

                    {/* Table head */}
                    <Thead>
                      <Tr>
                        <Th>PLANS</Th>
                        <Th>Subscription</Th>
                        <Th>Price</Th>
                      </Tr>
                    </Thead>
                    {/* Table head Ends here */}

                    {/* Table Body starts here */}
                    <Tbody>
                      <Tr>
                        <Td><Heading size='md'>Business Professional</Heading></Td>
                        <Td>

                            {/* Button to decrement */}
                            <Button onClick={dec} bg='none'  mr='2ch' _hover={{opacity:'0.7'}}>▼</Button>

                            <Heading size='lg' display='inline'>{count}</Heading>

                            {/* Button to increment */}
                            <Button onClick={inc} bg='none' ml='2ch' _hover={{opacity:'0.7'}}>▲</Button>

                        </Td>
                        <Td isNumeric><Heading size='md'>$579</Heading></Td>
                      </Tr>
                    </Tbody>
                    {/* Table body ends here */}

                  </Table>
                </TableContainer>
                {/* Table Ends here */}



                <Divider mt='5ch'/>


                {/* Table 2 starts here */}
                <TableContainer mt='5ch'>
                  <Table size='2xl' color='white' variant='unstyled'>

                    {/* Table Body starts here */}
                    <Tbody>
                      <Tr>
                        <Td><Heading size='md'>sub total</Heading></Td>
                        <Td isNumeric><Heading size='lg'>${total}</Heading></Td>
                      </Tr>

                      <Tr>
                        <Td><Heading size='md'>ESTIMATED TAX</Heading></Td>
                        <Td isNumeric><Heading size='lg'>$0</Heading></Td>
                      </Tr>
                    </Tbody>
                    {/* Table body ends here */}

                  </Table>
                </TableContainer>
                {/* Table 2 ends here */}

                <Divider mt='5ch'/>

                {/* Table 2 starts here */}
                <TableContainer mt='5ch'>
                  <Table size='2xl' color='white' variant='unstyled'>

                    {/* Table Body starts here */}
                    <Tbody>
                      <Tr>
                        <Td><Heading size='md'>Total due today</Heading></Td>
                        <Td isNumeric><Heading size='lg'>${total}</Heading></Td>
                      </Tr>
                    </Tbody>
                    {/* Table body ends here */}

                  </Table>
                </TableContainer>
                {/* Table 2 ends here */}
            </Box>
            {/* Order Summery Box ends here */}
        </Box>
        {/* Box contain Account details and Order summary ends here*/}
    </Box>
    // Main container ends here
  )
}