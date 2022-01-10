import React, {useRef} from 'react';
import {Box, Flex, Heading, Text, VStack, Input, Button, Stack, BoxProps} from '@chakra-ui/react'
import {RiSearch2Line} from 'react-icons/ri'
import vinStore from '../../../../store/store';
import Router from 'next/router'
import {motion} from 'framer-motion'

export const MotionBox = motion<BoxProps>(Box)


export default function HeroSection() {
  
  const vin = vinStore(state => state.vin)
  const setVin = vinStore(set => set.setVin)
  const vinRef = useRef(vin)
  
  //handle the vin Chnage event
  const handleChange = (event: any) => {
    setVin(event.target.value)
    vinRef.current.value = event.target.value
  }

  //Search the vin 
  const searchVin = (event:any) => {
    event.preventDefault()
    setVin(vinRef.current.value)
    const {pathname} = Router
    if(pathname === '/' ){
        Router.push("/report/vin/"+vinRef.current.value)
    }
    vinRef.current.value = ''
  }

  //Generating Random VIN
  const testVIN = [
    '5TENX22N76Z245036',
    'WBA5B3C50GG252337',
    'SCBFR7ZA5CC072256',
    '4F2YU09152KM31556',
    '4DRBWAFN06A207518',
  ]
  const randVin = Math.floor(Math.random() * testVIN.length) //to get an index
  const randomVIN = testVIN[randVin]; //to get the value of the index in the array
  
  const generateVIN = (event:any) => {
    event.preventDefault()
    vinRef.current.value = randomVIN
    setVin(vinRef.current.value)
  }
  
  return (
    <Box w="full" mx="auto" minH="550" bgImage="url('../image/slide/car.jpeg')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" bgBlendMode="multiply">
      <Box position="absolute" bgColor="heroOverlay" w="full" h="550">
          <Box maxW="7xl" mx="auto" py={{base: '16', md: '24'}} px={{ base: '8', md: '14' }}>
               <Flex justify="end">
                      <VStack>
                      <MotionBox initial={{ opacity: 0, x: 150 }} animate={{ opacity: 1, x: 0, transition:{ fade: 'fadeIn' ,duration: 0.5, delay: .5 } }} >  
                          <Heading as="h1" fontSize={{base: '40px', md: '68px'}} textShadow="0px 4px 4px rgba(255, 255, 255, 0.33)" color="skyBlue">Shine Your Eyes</Heading>
                      </MotionBox>
                      <MotionBox initial={{ opacity: 0, x: 150 }} animate={{ opacity: 1, x: 0 ,transition:{ fade: 'fadeIn' ,duration: 0.5, delay: 1 }}}>
                      <Box justify="start">
                          <Heading as="h2" fontSize={{base: '20px', md: '28px'}} py="2" color="skyBlue">Check Am Before You Buy Am</Heading>
                      </Box>
                      </MotionBox>
                      <form onSubmit={searchVin}>
                       {/* Search box */}
                       
                      <Box w="full" py="8">
                      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ fade: 'fadeIn' ,duration: 1, delay: 1.5 }}}>
                          <Stack direction={['column', 'row']} spacing="4">
                              <Box w={['100%', '75%']}>
                                <Input ref={vinRef} fontSize="14px" fontWeight="medium" placeholder='Enter VIN' color="skyBlue"  focusBorderColor="skyBlue" textTransform="uppercase" letterSpacing="8px" onChange={handleChange} />
                              </Box>
                              <Box>
                                <Button type="submit" w={['100%', '100%']} bgGradient="linear(to-t, red.200, red.100)" rounded="md" color="white" _hover={{bgGradient: "linear(to-r, red.200, red.100)"}} fontSize="13px" fontWeight="medium">
                                  <RiSearch2Line size="26" />
                                  Search</Button>
                              </Box>
                          </Stack>
                          <Text fontSize="11px" fontStyle="italic" py="2" color="skyBlue">
                            <a href="" onClick={generateVIN}>
                            Click here to test with a random VIN.
                            </a>
                          </Text>
                          </MotionBox>
                          <MotionBox initial={{ opacity: 0, x: 150 }} animate={{ opacity: 1, x: 0, transition:{ fade: 'fadeIn' ,duration: 1, delay: 1.7 } }}>
                              <Heading as="h4" fontSize={{base: '16', md:'18'}} color="skyBlue" fontWeight="regular" py="2" pr={{base: '4', md:'0'}}>Research any vehicle by VIN Number for free. Be Smart.</Heading>
                          </MotionBox>
                      </Box>
                       
                      </form>
                      {/* Search Box End */}
                      </VStack>
               </Flex>
          </Box>
      </Box>
    </Box>
  );
}
