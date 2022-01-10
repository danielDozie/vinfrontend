import {
  Box,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  useColorModeValue as mode,
  Image,
  Text,
  BoxProps
} from "@chakra-ui/react";
import Link from "next/link";
import {
  BsShieldFillCheck,
  BsShieldFillExclamation,
  BsShieldSlashFill,
} from "react-icons/bs";
import vinStore from "../../../../store/store";
import styles from "./report.module.css";
import _ from "lodash";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion' 

//Left section component
const LeftSection = ({ data }: any) => {
  return (
    <>
      <Box w="75%" py="8" pos="relative">
        <TopMenuSection />
        <TopContentSection data={data} />
      </Box>
    </>
  );
};

export function TopMenuSection() {
  const vin = vinStore((state) => state.vin);
  return (
    <>
      <Box
        className={styles.shadowBottom}
        bg={mode("", "#1d273a")}
        borderBottomRadius="4px"
        h="40px"
        w="100%"
        pos="absolute"
        top={0}
        left={0}
      >
        <Flex maxW="90%" mx="auto">
          <Link href="/">
            <Heading
              as="h1"
              fontWeight="medium"
              p="3"
              fontSize="14px"
              color="red.500"
            >
              Home
            </Heading>
          </Link>
          <Heading as="h1" fontWeight="medium" p="3" fontSize="14px">
            /
          </Heading>
          <Link href="#">
            <Heading
              as="h1"
              fontWeight="medium"
              p="3"
              fontSize="14px"
              color="teal"
            >
              Vehicle Report
            </Heading>
          </Link>
          <Heading as="h1" fontWeight="medium" p="3" fontSize="14px">
            /
          </Heading>
          <Link href="#">
            <Heading
              as="h1"
              fontWeight="medium"
              p="3"
              fontSize="14px"
              color={mode("gray.500", "")}
            >
              Check {vin}
            </Heading>
          </Link>
        </Flex>
      </Box>
    </>
  );
}

export function TopContentSection({ data }: any) {
  const vin = vinStore((state) => state.vin);
  const [tableData, setTableData] = useState([]);
  const [initTrim, setInitTrim] = useState(5);
  const allTableData = _.size(tableItems);

  useEffect(() => {
    const items: any = tableItems.slice(0, initTrim);
    setTableData(items);
  }, [initTrim]);

  const loadMore = (e: any) => {
    e.preventDefault();
    setInitTrim(allTableData);
    const node: HTMLElement | any = document.getElementById("showAll");
    node.style.display = "none";

    
  };
  const MotionBox = motion<BoxProps>(Box);
  const loadmoreVariants = {
    initial: { opacity: 1, y: 0 }, 
    visible: { opacity: 0, y: 150, transition: { duration: 1, ease: 'easeInOut'} },
    click: { opacity: 0, y: -150, transition: { duration: 1, ease: 'easeInOut'} }
  }
  

  
  return (
    <>
      <Box mt="16" maxH="80vh" pb="20%" overflowY="auto" zIndex="300">
        <VStack>
          <Flex w="100%" px="12">
            <Box boxSize="250" minW="250">
              <Image
                src="/image/assets/noimageavailable.png"
                alt="car"
                borderRadius="10px"
              />
              <Box mt="4">
                <Text
                  pb="2"
                  fontSize="11"
                  fontWeight="semibold"
                  color={mode("gray.500", "gray.400")}
                >
                  {" "}
                  What is VIN?
                </Text>
                <Text
                  pb="2"
                  fontSize="11"
                  fontWeight="semibold"
                  color={mode("gray.500", "gray.400")}
                >
                  {" "}
                  Where can I find it?
                </Text>
                <Text
                  fontSize="11"
                  fontWeight="semibold"
                  color={mode("gray.500", "gray.400")}
                >
                  {" "}
                  What report do I get for free?
                </Text>
              </Box>
            </Box>
            <Box ml="8">
              <Heading
                as="h1"
                color={mode("headingColor", "")}
                textAlign={"left"}
                fontSize="28"
              >
                {data.years[0]?.year} {data?.make?.name} {data?.model?.name}
              </Heading>
              <Text
                fontWeight="bold"
                textTransform="capitalize"
                color="teal"
                textAlign={"left"}
                fontSize="22"
                textShadow={mode("1px 1px #f4f6fc", "1px 1px #252e4b")}
                mt="2"
              >
                VIN {vin}
              </Text>
              <SimpleGrid columns={2} spacing="1px">
                <Text
                  textTransform="capitalize"
                  fontWeight="normal"
                  textAlign={"left"}
                  fontSize="15"
                  mt="2"
                  color={mode("subHeadingColor", "gray.400")}
                >
                  Engine:{" "}
                  <Box as="span" fontWeight="medium">
                    {data?.engine?.type} - {data?.engine?.name}
                  </Box>
                </Text>
                <Text
                  fontWeight="normal"
                  textAlign={"left"}
                  fontSize="15"
                  mt="2"
                  color={mode("subHeadingColor", "gray.400")}
                >
                  Transmission:{" "}
                  <Box as="span" fontWeight="medium">
                    {data?.transmission?.transmissionType}
                  </Box>
                </Text>
                <Text
                  fontWeight="normal"
                  textAlign={"left"}
                  fontSize="15"
                  mt="2"
                  color={mode("subHeadingColor", "gray.400")}
                >
                  Last ODO Reading:{" "}
                </Text>
                <Text
                  fontWeight="normal"
                  textAlign={"left"}
                  fontSize="15"
                  mt="2"
                  color={mode("subHeadingColor", "gray.400")}
                >
                  Vehicle Type:{" "}
                  <Box as="span" fontWeight="medium">
                    {data?.categories?.vehicleSize}{" "}
                    {data?.categories?.vehicleStyle}{" "}
                    {data?.categories?.vehicleType}
                  </Box>{" "}
                </Text>
              </SimpleGrid>
              <HStack mt="4">
                <Button colorScheme="teal">
                  <Link href="/">
                    <Text fontWeight="medium" fontSize="12">
                      Edit VIN
                    </Text>
                  </Link>
                </Button>
                <Button
                  bgGradient="linear(to-t, red.200, red.100)"
                  rounded="md"
                  color="white"
                  _hover={{ bgGradient: "linear(to-r, red.200, red.100)" }}
                  fontSize="16px"
                  fontWeight="medium"
                >
                  <Text fontWeight="semibold" fontSize="12">
                    Speak to our experts
                  </Text>
                </Button>
              </HStack>
              <Box py="2">
                <Text fontSize="11px" color="gray.500">
                  You can speak to our vehicle experts on matters relating to
                  your vehicle. We are always ready to lend the best hands in
                  the business to giving you the true definition of your
                  vehicle. We are happy to help you with any questions you may
                  have.
                </Text>
              </Box>
            </Box>
          </Flex>
          <Box w="90%" borderRadius="15px">
            <Table variant="striped" colorScheme="gray">
              <Tbody
                fontWeight="medium"
                fontSize="15px"
                color={mode("subHeadingColor", "gray.400")}
              >
                {tableData.map((item:any) => (
                  <Tr key={item.id}>
                    <Td>{item.title}</Td>
                    <Td>
                      <HStack>
                        {item.value !== null && item.value !== 0 ? (
                          <>
                            <BsShieldFillCheck color="teal" />
                            <Text>{item.value} Records Found</Text>{" "}
                          </>
                        ) : item.value === 0 ? (
                          <>
                            <BsShieldFillExclamation color="#b34242" />{" "}
                            <Text> No Records Found </Text>
                          </>
                        ) : item.value === null ? (
                          <>
                            <BsShieldSlashFill /> <Text> Unverified</Text>
                          </>
                        ) : null}
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <MotionBox initial="initial" animate="visible" variants={loadmoreVariants}>
            <Box
              id="showAll"
              bgGradient={mode(
                "linear(to-t, gray.200, white)",
                "linear(to-t, gray.600, #1A202C)"
              )}
              h="130px"
              align="center"
              mt="-70px"
              position="relative"
              opacity=".7"
              borderBottomRadius="5px"
            >
              <Button
                mt="20"
                size="sm"
                colorScheme="default"
                variant="outline"
                onClick={loadMore}
              >
                <Text fontWeight="medium" fontSize="12">
                  Show all
                </Text>
              </Button>
            </Box>
            </MotionBox>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

type tableItems = {
  id: number;
  title: string;
  value: number | null | 0;
}[];

const tableItems: tableItems = [
  {
    id: 1,
    title: "Mileage",
    value: 5,
  },
  {
    id: 2,
    title: "Photos From Listing & Autions",
    value: 8,
  },
  {
    id: 3,
    title: "NMVTIS Vehicle History",
    value: 0,
  },
  {
    id: 4,
    title: "Junk & Salvage Information",
    value: 0,
  },
  {
    id: 5,
    title: "Title History",
    value: 2,
  },
  {
    id: 6,
    title: "Recalls",
    value: 0,
  },
  {
    id: 7,
    title: "Insurance Information",
    value: 0,
  },
  {
    id: 8,
    title: "Equipment",
    value: 0,
  },
  {
    id: 9,
    title: "Market Size Analysis",
    value: null,
  },
  {
    id: 10,
    title: "Ourneship",
    value: 15,
  },
  {
    id: 11,
    title: "Title History",
    value: 5,
  },
];

export default LeftSection;
