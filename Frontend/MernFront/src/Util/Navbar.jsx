import {Container, Flex, HStack, Link, Text, Button} from "@chakra-ui/react";
import {IoIosAddCircleOutline} from "react-icons/io";


function Navbar(){
    return ( <Container maxW="container.xl">
            <Flex h={16} alignItems="center" justifyContent="space-between" flexDir={{base: 'column', md: 'row'}}>
                <Text fontSize="2xl" fontWeight="bold" color="red.500">
                    Welcome to my FruitShop
                </Text>

                <HStack spacing={2} alignItems="center">
                    <Link to="/create">
                        <Button>
                            <IoIosAddCircleOutline fontSize={20}/>
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar;