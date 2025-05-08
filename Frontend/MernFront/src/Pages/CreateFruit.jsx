import {useState} from "react";
import {Container, VStack, Heading, Box, Input, Flex, HStack, Link, Text, Button} from "@chakra-ui/react";
import Swal from 'sweetalert2'
import {useFruitStore} from "../store/fruit.js";

function CreateFruit(){
    const [newFruit, setNewFruit] = useState({
        name: '',
        color: '',
        taste: '',
        isHealthy: 1
    });
    const { createFruit } = useFruitStore()
    const handleAddFruit = async () => {
        const {success, msg} = await createFruit(newFruit);
        if(success){
            Swal.fire({
                title: "Success!",
                text: "Fruit added successfully",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Failed!",
                text: "Failed to add fruit.",
                icon: "error"
            });
        }
        setNewFruit({name: '', color: '', taste: '', isHealthy: 1})
    }
    return (
        <Container maxW="container.xl">
            <VStack spacing={2} alignItems="center">
                <Heading as="h1" size="2xl" fontWeight="bold" color="red.500">
                    Create Fruit
                </Heading>
                <Box w='full' p={6} rounded='lg' shadow="md" bg="white">
                    <VStack spacing={4}>
                        <Input placeholder='Fruit Name' name='name' value={newFruit.name} onChange={e => setNewFruit({...newFruit, name: e.target.value})}></Input>
                        <Input placeholder='Fruit Color' name='color' value={newFruit.color} onChange={e => setNewFruit({...newFruit, color: e.target.value})}></Input>
                        <Input placeholder='Fruit Taste' name='taste' value={newFruit.taste} onChange={e => setNewFruit({...newFruit, taste: e.target.value})}></Input>
                        <Input placeholder='Fruit Healthiness' name='isHealthy' value={newFruit.isHealthy} onchange={e => setNewFruit({...newFruit, isHealthy: e.target.value})}></Input>
                        <Button onClick={handleAddFruit}>Add Fruit</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreateFruit;