import { Box, Heading, SimpleGrid, useColorModeValue as mode, VStack, Text, Image, Spacer } from '@chakra-ui/react';
import React, { useEffect } from "react";
import { BoxProps } from '@chakra-ui/layout';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { historyIconsVariant, historySectionVariant } from './_homeAnimation';


export const MotionBox = motion<BoxProps>(Box)


export default function HistoryReport() {
  
  
  //controlling inView animation 
  const controls = useAnimation(); //let's you take controll of when animation should start and stop
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  
  return (
    <Box maxW="7xl" mx="auto">
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={historySectionVariant}>
        <Box justify="center">
            <Heading as="h1" fontSize={['25', '37']} pt="20" textAlign="center" color={mode('headingColor', 'skyBlue')} fontWeight="medium">
            Shorten And Amplify Your<br/>
            Car History Report
            </Heading>
            <Heading as="h2" fontSize={['14', '22']} py="8" textAlign="center" color={mode('subHeadingColor', 'skyBlue')} fontWeight="regular">
                Meet Our Intuitive Platform
            </Heading>
        </Box>
        </MotionBox>
        
        <Box py="2">
            <Box maxW="5xl" mx="auto">
              <Box p={[4, 8]} mr={["4", "0"]}>
              <SimpleGrid columns={[2, 4]} spacing="10">
                  {boxItems.map((boxItem) => 
                    <MotionBox ref={ref} custom={boxItem.id} initial="hidden" animate={controls} variants={historyIconsVariant} whileHover="hover" whileTap="tap" key={boxItem.id}>
                    <Box bg={mode('white', 'deepBlue.100')} h="180px" w="180px" shadow="lg">
                      <VStack px="4">
                        {boxItem.icon}
                        <Heading as="h1" fontSize={['12', '14']} textAlign="center" fontWeight="medium" mt="4">{boxItem.title}</Heading>
                        <Spacer />
                        <Box border='1px' w="50%" borderStyle="dashed" />
                        <Spacer />
                        <Text fontSize={['11', '11']} textAlign="center" fontWeight="regular" color={mode('subHeadingColor', '')} >{boxItem.description}</Text>
                      </VStack>
                    </Box>
                    </MotionBox>
                    )}
                </SimpleGrid>
              </Box>
                <MotionBox>
                <Box px={['8', '16']}>
                    <Heading as="p" fontSize={['17', '19']} textAlign="center" my="8" color={mode('subHeadingColor', '')} fontWeight="light">
                    As part of our giveback to the community, ONGAD provides <b>basic free VIN check report</b> to the public to determine the vehicle is a lemon, salvaged or has flooded condition. We also provide historical mileage/sales records for free! No credit card required!
                    </Heading>
                </Box>
                </MotionBox>
            </Box>
        </Box>
    </Box>
  );
}

const searchIcon = <Image src="../image/icons/search-alt.svg" boxSize="36px" objectFit="contain" alt="searchIcon" mt="6"  />
const dataIcon = <Image src="../image/icons/data.svg" boxSize="36px" objectFit="contain" alt="dataIcon" mt="6"  />
const paymentIcon = <Image src="../image/icons/payment.svg" boxSize="36px" objectFit="contain" alt="paymentIcon" mt="6"  />
const reportIcon = <Image src="../image/icons/report.svg" boxSize="36px" objectFit="contain" alt="reportIcon" mt="6"  />


type BoxItem = {
  id: number,
  title: string,
  description: string,
  icon: JSX.Element,
}[]

const boxItems: BoxItem = [
  {
    id: 1,
    title: 'Enter your VIN',
    description: 'The only thing you need to know to get started',
    icon: searchIcon,
  },
  {
    id: 2,
    title: 'Data Search',
    description: 'The only thing you need to know to get started',
    icon: dataIcon,
  },
  {
    id: 3,
    title: 'Secure Payment',
    description: 'The only thing you need to know to get started',
    icon: paymentIcon,
  },
  {
    id: 4,
    title: 'Get your Report',
    description: 'The only thing you need to know to get started',
    icon: reportIcon,
  },
]

