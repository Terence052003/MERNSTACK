import {Box} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreateFruit from "./Pages/CreateFruit.jsx";
import Navbar from "./Util/Navbar.jsx";

function App(){
    return (
        <Box minH={"100vh"}>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/create' element={<CreateFruit/>}/>
            </Routes>
        </Box>
    )
}

export default App
