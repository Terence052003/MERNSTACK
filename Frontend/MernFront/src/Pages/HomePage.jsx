import {Container, VStack, Text, SimpleGrid} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useFruitStore} from "../store/fruit.js";
import Fruit from "../../../../Backend/models/fruits.model.js";
import FruitFor from "../Util/FruitFor.jsx";

function HomePage(){
    const {fetchFruits,fruits} = useFruitStore()
    useState(() => {
        fetchFruits();
    }, [fetchFruits]);
    console.log(fruits);
    return (
        <Container maxW='container.xl' py={12}>
            <VStack spacing={8}>
                <Text fontSize='4xl' fontWeight='bold' color='red.500'>
                    Current Fruits
                </Text>
                {fruits.length === 0 && (
                    <Text fontSize='3xl' fontWeight='semibold' color='red.400'>
                        No Fruits added yet.
                        <Link to='/create'>
                            <Text as='u' color='red.500'>
                                Add Fruit
                            </Text>
                        </Link>
                    </Text>
                )}

                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3,
                    }}
                    spacing='10'
                    width='full'>
                    {fruits.map(fruit => (
                        <FruitFor key={fruit._id} fruit={fruit}/>
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default HomePage;