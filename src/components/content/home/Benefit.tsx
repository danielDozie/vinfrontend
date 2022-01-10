import React, { useEffect } from 'react';
import {
	Box,
	Flex,
	Heading,
	VStack,
	Text,
	useColorModeValue as mode,
	Button,
	Spacer,
	HStack,
	Image,
	ButtonProps,
} from '@chakra-ui/react';
import {BoxProps, HeadingProps} from '@chakra-ui/layout';
import { RiQuestionFill } from 'react-icons/ri';
import { motion,  useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"
import {benefitTitleVariant, benefitDescriptionVariant, benefitConsultUsVariant, buttonVariant} from './_homeAnimation'


interface ImageProps {
	light: string,
	dark: string,
}
interface manImage {
	imageUrl: string,
	imageAlt: string,
}

const manImage: manImage = {
	imageUrl: '../image/assets/manHoldingCar.jpeg',
	imageAlt: 'Man Holding Car',
};
const leftImage: ImageProps = {
	light: "url('../image/assets/rightBlob.svg')",
	dark: "url('../image/assets/darkRightBlob.svg')",
};

const MotionBox = motion<BoxProps>(Box)
const MotionHeading = motion<HeadingProps>(Heading)
const MotionButton = motion<ButtonProps>(Button)


export default function Benefit() {
	const controls = useAnimation(); //let's you take controll of when animation should start and stop
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible")
		}
		else{ 
			controls.start("invisible")
		}
	}, [controls, inView])
	
	return (
		<Box maxW="7xl" mx="auto">
			<Flex
				pl={[ '8', '32' ]}
				py={[ '16', '20' ]}
				direction={[ 'column', 'row' ]}
				bgImage={mode(leftImage.light, leftImage.dark)}
				bgPosition={[ 'left 180%', '101% 1000%' ]}
				bgRepeat="no-repeat"
				bgSize={[ '0', '650px' ]}
				w="400"
				h="650"
			>
				<Box>
					<VStack>
						<Box>
							<MotionHeading
								as="h1"
								fontSize={[ '24', '48' ]}
								color={mode('deepBlue.100', 'skyBlue')}
								fontWeight="medium"
								initial="hidden"
								animate={controls}
								variants={benefitTitleVariant}
								ref={ref}
							>
								Benefits of Checking<br /> Vehicle History Report{' '}
							</MotionHeading>
							<MotionBox 
								py="8"
								fontSize={[ '15', '17' ]}
								color={mode('headingColor', 'skyBlue')}
								fontWeight="regular"
								maxW="600px"
								pr={[ '8', '0' ]}
								initial="hidden"
								animate={controls}
								variants={benefitDescriptionVariant}
								ref={ref}

								>
							<Text>
								It’s very important to know a vehicle history when you are buying a vehicle on the
								secondary market. Car history check is a must especially with such a large used
								car market in Nigeria.
								The likelihood of buying a car after an accident, fire, flood or crime is very
								high.<br/> Vehicle information will help you avoid problems.
							</Text>
							</MotionBox>
							<MotionHeading as="h1" fontWeight="medium" fontSize={['15', '16']}
							initial="hidden"
							animate={controls}
							variants={benefitConsultUsVariant}
							ref={ref}
							>
								Want a free consultation from ONGAD experts?
							</MotionHeading>
							<Spacer my="8" />
							<MotionButton
								maxW={[ '100%', '40%' ]}
								bgGradient="linear(to-t, red.200, red.100)"
								rounded="md"
								color="white"
								_hover={{ bgGradient: 'linear(to-r, red.200, red.100)' }}
								fontSize="16px"
								fontWeight="medium"
								initial="hidden"
								animate={controls}
								variants={buttonVariant}
								ref={ref}

							>
								<HStack>
									<Text>Get in touch with us </Text>
									<RiQuestionFill size="20" />
								</HStack>
							</MotionButton>
						</Box>
					</VStack>
				</Box>
				
				<MotionBox position="relative" ml={[ '0', '8' ]} mt={[ '8', '0' ]} animate={{opacity: 1}} whileHover={{rotate: 10}} whileTap={{rotate: 10}}>

					<Box
						maxW="350"
						h="470"
						bgColor="red.500"
						rounded="lg"
						pos="relative"
						top={[ '2', '3' ]}
						left={[ '2', '3' ]}
					/>

					<Image
						src={manImage.imageUrl}
						imagealt={manImage.imageAlt}
						w={350}
						h={470}
						rounded={`lg`}
						pos="relative"
						top={[ '-50%', '-96%' ]}
						left="0"
						alt={manImage.imageAlt}
					/>
					
				</MotionBox>
			</Flex>
		</Box>
	);
}
