import React, { useEffect } from 'react'
import { Box, Flex, Heading, List, Image, ListItem, useColorModeValue as mode, VStack, HStack, Button, Spacer } from '@chakra-ui/react'
import {BoxProps, HeadingProps} from '@chakra-ui/layout'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import {motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {titleVariant, descriptionVariant, listVariant, readMoreVariant} from './_homeAnimation'

const ListIcon = <Image src="../image/icons/point.svg" boxSize="16px" objectFit="contain" alt="searchIcon"  />
    
const MotionBox = motion<BoxProps>(Box)
const MotionHeading = motion<HeadingProps>(Heading)


export default function WhatWeOffer() {
    
      //controlling inView animation 
      const controls = useAnimation(); //let's you take controll of when animation should start and stop
      const [ref, inView] = useInView();
      
      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
        else
        {
          controls.start("invisible");
        }
      }, [controls, inView]);
    
    return (
        <Box maxW="7xl" mx="auto" bg={mode('skyBlue', 'deepBlue.100')} minH={["800", "0"]} pb={['12', '0']}>
            <Flex pl={["0","16"]} py={["16", "20"]}  direction={["column", "row"]} bgImage="url('../image/icons/girlie.svg')" bgPosition={["center 100%", "center right"]} bgRepeat="no-repeat" bgSize={["400px", "750px"]}>
                <Box px={[0, 20]} pb={["44", "0"]} mb={['16','0']}>
                    <VStack>
                        <Box>
                        <MotionHeading ref={ref} initial="hidden" animate={controls} variants={titleVariant}>
                        <Heading as="h1" fontSize={["18","22"]} fontWeight="medium" color={mode('deepBlue.100', 'skyBlue')}>What we Offer
                        </Heading>
                        </MotionHeading>
                        <MotionHeading ref={ref} initial="hidden" animate={controls} variants={descriptionVariant} >
                        <Heading as="h1" fontSize={["20","28"]} py="8" color={mode('headingColor', 'skyBlue')} fontWeight="medium">We provide Naija with<br/> the most comprehensive<br/> and up to date report in the market
                        </Heading>
                        </MotionHeading>
                        <List spacing={3} >
                                {listText.map(list => (
                                <ListItem pt="2" key={list.id}>
                                    <MotionHeading ref={ref} whileHover="hover" custom={list.id} initial="hidden" animate={controls} variants={listVariant}>
                                    <HStack>
                                    {ListIcon} 
                                    <Heading as="p" fontSize="15" fontWeight="regular"  color={mode('headingColor', 'skyBlue')}>
                                    {list.text}
                                    </Heading>
                                    </HStack>
                                    </MotionHeading>
                                </ListItem>
                                ))}
                            </List>
                            <Box> 
                                    <MotionHeading ref={ref} initial="hidden" animate={controls} variants={readMoreVariant}>
                                <Heading as="h3" fontSize="12" textAlign="left" py="8"><Link href="/">Plus lots more...</Link> </Heading>
                                    </MotionHeading>
                                <Button bgGradient="linear(to-t, deepBlue.500, deepBlue.100)" mt={["2","8"]} color="white" rounded="lg" fontWeight="medium" _hover={{bgGradient:"linear(to-r, deepBlue.100, deepBlue.500)"}}>
                                    <HStack>
                                    <Heading as="p" fontSize="14">Find out more</Heading> 
                                    <BsArrowRight />
                                    
                                    </HStack>
                                </Button> 
                            </Box>
                            <Spacer />
                        </Box>
                        
                    </VStack>
                </Box>
                
            </Flex>
        </Box>
    )
}


const listText = [
    {
        id: 1,
        text: 'Vehicle financial liability check',
    },
    {
        id: 2,
        text: 'Odometer check',
    },
    {
        id: 3,
        text: 'Vehicle valuation & registration details',
    },
    {
        id: 4,
        text: 'National view of the vehicle history',
    },
    {
        id: 5,
        text: 'ANCAP safety & emission ratings',
    },
    {
        id: 6,
        text: 'Damages, stolen status, and write-off check',
    },
]