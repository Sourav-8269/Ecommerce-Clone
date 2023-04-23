import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Icon,
  chakra,
  Tooltip,
  Button
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';


// interface RatingProps {
  //   rating: number;
  //   numReviews: number;
  // }
  
  function Rating({ rating, numReviews }) {
    // const data = {
    //   isNew: true,
    //   imageURL:
    //     'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    //   name: 'Wayfarer Classic',
    //   price: 4.5,
    //   rating: 4.2,
    //   numReviews: 34,
    // };


    return (
    <Box d="flex" alignItems="center"  display="flex">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

function ProductAddToCart({title,image,price,click}) {
  const data = {
      isNew: price<500?true:false,
      imageURL:
        image,
      name: title,
      price: price,
      rating: 4.2,
      numReviews: 34,
    };
    // console.log(data)
    // console.log(click)
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center" textAlign="left">
      <Box

        maxW="sm"
        borderWidth="1px"
        // display="flex"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}
        <Box display="flex">
          <Image
          
            src={data.imageURL}
            display="flex"
            alignItems="center"
            align="center"
            // border="1px solid red"
            justify="center"
            alignContent="center"
            // ml={6}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />

        </Box>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              >
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a display={'flex'}>
                <Icon onClick={()=>click(title)} cursor="pointer"  as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl">
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {data.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;