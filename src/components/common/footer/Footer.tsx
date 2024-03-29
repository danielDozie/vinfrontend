import { Box, Flex, Heading, useColorModeValue as mode, List, ListItem, HStack,Text } from '@chakra-ui/react'
import React from 'react'
import { RiFacebookBoxFill } from 'react-icons/ri'
import {ImLinkedin, ImInstagram} from 'react-icons/im'
import {AiFillTwitterSquare} from 'react-icons/ai'
import Link from 'next/link'


export default function Footer() {
    return (
        <>
            <Box w="100%" h="100%" mx="auto" position="relative">
            {/* <Box bgImage={mode("/image/assets/footerWave.svg","/image/assets/footerWave2.svg")} bgSize="cover" h={["120px","180px"]} mt={["-100px","-20px"]} zIndex="999999"/> */}
                <Box bgColor={mode("deepBlue.100", "deepBlue.200")} pt={["100px", "100px"]} pb={["0px", "100px"]}>
                    <Box w={["100%", "80%"]} mx="auto" >
                <Flex justify="space-between" direction={[ 'column', 'row' ]} px={["8","0"]}>
                    <Box color="skyBlue" pb={["16", "0"]}>
                        <Heading as="h1" fontSize={["18px","24px"]} fontWeight="medium">About Us</Heading>
                        <Box width="70px" color="red.500" borderBottom="2px" py="2" />
                        <Box py="8" maxW="md">
                            <Text fontWeight="regular" fontSize="14px">
                                Spend a minute to get a detailed vehicle 
                                history report today and avoid years of dealing 
                                with underlying hidden problems. 
                                Reduce your risks of buying a problematic car. <br/>
                                Get a vehicle history report now
                            </Text>
                        </Box>
                        <Box>
                            <HStack spacing="5">
                                <RiFacebookBoxFill size="22px" />
                                <AiFillTwitterSquare size="22px" />
                                <ImInstagram size="16px" />
                                <ImLinkedin size="16px" />
                            </HStack>
                        </Box>
                    </Box>
                    <HStack spacing={[100, 200]}>
                                <Box color="skyBlue" pb={["8", "0"]}>
                                    <Heading as="h1" fontSize={["18px", "24px"]} fontWeight="medium">Information</Heading>
                                    <Box width="70px" color="red.500" borderBottom="2px" py="2" />
                                    <Box py="8">
                                        <List spacing={3} fontSize="14px" fontWeight="regular">
                                            {
                                                Information.map(item => (
                                                    <Link href={item.link} key={item.id} passHref>
                                                        <ListItem>
                                                            {item.menu}
                                                        </ListItem>
                                                    </Link>

                                                ))
                                            }
                                        </List>
                                    </Box>
                                </Box>
                                <Box color="skyBlue" pb={["8", "0"]}>
                                    <Heading as="h1" fontSize={["18px", "24px"]} fontWeight="medium">Quick Links</Heading>
                                    <Box width="70px" color="red.500" borderBottom="2px" py="2" />
                                    <Box py="8">
                                        <List spacing={3} fontWeight="regular" fontSize="14px">
                                            {
                                                QuickLinks.map(item => (
                                                    <Link href={item.link} key={item.id} passHref>
                                                        <ListItem >
                                                            {item.menu}
                                                        </ListItem>
                                                    </Link>
                                                ))}
                                        </List>
                                    </Box>
                                </Box>
                    </HStack>
                </Flex>
                </Box>
             </Box>   
        </Box>
        <Box w="100%" mx="auto" borderTop="1px" borderColor="red.100" h={["60px","50px"]}  px={["8", "0"]} py={["4", "0"]}>
            <Box w={["100%", "80%"]} mx="auto"> 
                <Flex justify="space-between" direction={[ 'column', 'row' ]} textAlign="center">  
                        <Text fontWeight="light" fontSize="12px" py={["1", "4"]}>Copyright &copy; {new Date().getFullYear()}. ONGAD VIN Checker</Text>
                 <HStack fontWeight={["light", "light" ]} fontSize="12px" spacing={4} py="4" mx={["auto", "0"]}>
                     {
                         footerLink.map(item => (
                             <Link href={item.link} key={item.id}  passHref>
                                <Text>{item.menu}</Text>
                             </Link>
                         ) )
                     }
                 </HStack>
                </Flex>
            </Box>                     
        </Box>
        </>
    )
}


const Information = [
    {
        id: 1,
        menu: "Blog",
        link: "/blog",
    },
    {
        id: 2,
        menu: "Guide",
        link: "/guide",
    },
    {
        id: 3,
        menu: "FAQ",
        link: "/faq",
    },
    {
        id: 4,
        menu: "Contact Us",
        link: "/contact",
    },
]

const QuickLinks = [
    {
        id: 1,
        menu: "Buy Cars",
        link: "#",
    },
    {
        id: 2,
        menu: "Supports",
        link: "#",
    },
    {
        id: 3,
        menu: "Forum",
        link: "#",
    },
    {
        id: 4,
        menu: "VIN Decoder",
        link: "/",
    },
]

const footerLink = [
    {
        id: 1,
        menu: "Legal",
        link: "#",
    },
    {
        id: 2,
        menu: "Terms of services",
        link: "#",
    },
    {
        id: 3,
        menu: "Privacy policy",
        link: "#",
    },
]