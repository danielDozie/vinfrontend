import { Box, Heading, useColorModeValue as mode, Text, Flex, Grid, HStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { IoStarSharp, IoStarOutline } from 'react-icons/io5'
import Slider from "react-slick";
import { BoxProps, HeadingProps } from '@chakra-ui/layout'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {reviewTitleVariant, reviewDescriptionVariant, reviewVariant} from "./_homeAnimation"

type Props = {
    id: number,
    imageUrl: string,
    name: string,
    review: string,
    rating: number,
    position: string,
    custom: number
}

const settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
          }
        }
      ]
  };

  const MotionBox = motion<BoxProps>(Box)
  const MotionHeading = motion<HeadingProps>(Heading)

export default function UserReview() {
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
        <Box maxW="7xl" mx="auto" bgColor={mode("skyBlue", "deepBlue.100")} mt={["90%", "0"]} pb={["32", "52"]}>
            <Box pt="20" pb="8">
                <MotionHeading as="h1" fontSize="28" fontWeight="medium" textAlign="center"
                initial="hidden"
                animate={controls}
                variants={reviewTitleVariant}
                ref={ref}
                >Users Review</MotionHeading>
                <MotionBox 
                initial="hidden"
                animate={controls}
                variants={reviewDescriptionVariant}
                ref={ref}
                >
                <Text textAlign="center" py="6" px={["6", "0"]} fontSize={["17","16"]} fontWeight="regular">Whether you’re just buying a car, or just learning about your own <br />We’ve got you covered</Text>
                </MotionBox>
            </Box>
            <Box maxW="5xl" mx="auto" pb="16">
                <Slider {...settings}>
                {ReviewItems.map(review => (
                        <GridComponent id={review.id} custom={review.id} imageUrl={review.imageUrl} name={review.name} review={review.review} rating={review.star} position={review.position} />
                    ))}
                </Slider>
            </Box>
        </Box>
    )
}

const GridComponent = (props: Props) => {
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
    <MotionBox
    initial="hidden"
    animate={controls}
    variants={reviewVariant}
    ref={ref}
    custom={props.custom}
    key={props.id}
    whileHover="hover"
    whileTap="hover"
    > 
    <Grid w="320px" h="240px" maxW="95%" mt="14" bg={mode('white', 'deepBlue.500')} key="index" rounded="xl">
        <Box p="9" bgImage={props.imageUrl} bgSize="cover" bgRepeat="no-repeat" pos="absolute" borderRadius="50%" ml="35px" mt="-50px" shadow="lg"/>
        <Flex justify="space-between" px="4" >
            <Text color="red.300">
                <FaQuoteLeft size="55px" />
            </Text>
            <HStack spacing="1" pt="4" color="star-color">
                {
                    props.rating === 5 ? <FiveStar /> :
                    props.rating === 4 ? <FourStar /> : 
                    props.rating === 3 ? <ThreeStar /> : 
                    props.rating === 2 ? <TwoStar /> : 
                    props.rating === 1 ? <OneStar /> : 
                    <OneStar />
                }
            </HStack>
        </Flex>
        <Text textAlign="center" py="2" color="red.300">-----------------------------------</Text>
        <Box px="6" pb="2">
            <Text fontSize="13" fontWeight="thin" textAlign="left">{props.review}</Text>
            <HStack>
                <Text fontSize="13" fontWeight="thin" textAlign="left" pt="6">
                    {props.name} |
                </Text>
                <Text fontSize="13" fontWeight="medium" textAlign="left" pt="6" color="teal">
                    {props.position}
                </Text>
            </HStack>
        </Box>
        </Grid> 
    </MotionBox>
    )}

    const ReviewItems = [
        {
            id: 1,
            name: 'Mary Edwin',
            position: 'Marketer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 5,
            imageUrl: '../image/assets/userAvater.jpeg'
        },
        {
            id: 2,
            name: 'Maxwell Iyoh',
            position: 'Software Engineer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 4,
            imageUrl: '../image/assets/userAvater2.jpeg'
        },
        {
            id: 3,
            name: 'Bolingo Shepards',
            position: 'Photographer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 1,
            imageUrl: '../image/assets/userAvater3.jpeg'
        },
        {
            id: 4,
            name: 'Matt KaySule',
            position: 'Web Developer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 1,
            imageUrl: '../image/assets/userAvater3.jpeg'
        },
        {
            id: 5,
            name: 'Greg Shaw',
            position: 'Engineer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 1,
            imageUrl: '../image/assets/userAvater3.jpeg'
        },
    ]

    const FiveStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            </>
        )
    }
    const FourStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarOutline size="17px" />
            </>
        )
    }
    const ThreeStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            </>
        )
    }
    const TwoStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            </>
        )
    }
    const OneStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            </>
        )
    }
