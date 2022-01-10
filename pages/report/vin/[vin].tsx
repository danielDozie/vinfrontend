import { Box, Flex, Heading, Text, useColorModeValue as mode, } from '@chakra-ui/react'
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import LeftContent from '../../../src/components/content/vin-report/LeftContent';
import vinStore from '../../../store/store';

export default function Vin() {
    const vin = vinStore(state => state.vin)
    const [data, setData] = useState({
        make:{
            name: "",
        },
        model:{
            name: "",
        },
        years: [
            {
                year: "",
            }
        ],
    })
    useEffect(() => {
        const END_POINT = process.env.VIN_URI+vin+`?apikey=`+process.env.VIN_API_KEY
        fetch(END_POINT)
        .then(res => res.json())
        .then(data => setData(data))
    },[vin]);
    return (<>
    <Head>
        <title>Vehicle Report - {process.env.title}</title>
    </Head>
    <Box w="100%">
        <Flex>
            <LeftContent data={data}/>

            <Box w="40%" py="8" h="100vh" overflowY="auto" bgColor={mode("skyBlue","deepBlue.100")} zIndex="-10">
                <Box py="8" px="8" mx="auto">
                    <Heading as="h1" fontWeight="medium" fontSize="16px" pb="8" textAlign="left" textTransform="uppercase">Ongad Vehicle Identification Report </Heading>
                    <Text fontWeight="medium" textTransform="uppercase" color="teal">{data.years[0]?.year} {data?.make?.name } {data?.model?.name}</Text>
                </Box>
            </Box>
        </Flex>
    </Box>
    </>)
}



