import {Box, Heading, Text, HStack, Icon, IconButton} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {deleteFruit} from "../../../../Backend/controller/fruit.controller.js";
import {useFruitStore} from "../store/fruit.js";
import Swal from 'sweetalert2'

const FruitFor = ({fruit}) => {
    const {deleteFruit} = useFruitStore();
    const handleDeleteFruit = async (pid) => {
        const {success, msg} = await deleteFruit(pid);
        if(success){
            Swal.fire({
                title: "Success!",
                text: "Fruit deleted successfully",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Failed!",
                text: "Failed to delete fruit.",
                icon: "error"
            })
        }
    }
    return (
        <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        _hover={{ transform: "translateY(-5px)", boxShadow: "lg"}}
        >
            <Box p={4}>
                <Heading as='h3' fontSize='xl' fontWeight='bold' color='red.500'>
                    {fruit.name}
                </Heading>

                <Text font='semibold' color='red.400'>
                    {fruit.color}
                </Text>

                <HStack>
                    <Icon as={FaEdit} />
                    <IconButton icon={<MdDelete/>} onClick={() => handleDeleteFruit(fruit._id)} colorScheme='red'/>
                </HStack>


            </Box>
        </Box>
    )
}

export default FruitFor;