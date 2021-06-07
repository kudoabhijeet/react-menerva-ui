import React from "react";
import ProfileBox from './ProfileBox'
import HomeworkStatus from './HomeworkStatus'
import { HStack, Container} from "@chakra-ui/react";


function Upper() {
    
    return (
        <Container maxW="xl" centerContent>
        <HStack m={4} alignItems="center">
        <ProfileBox/>
        <HomeworkStatus/>   
        </HStack>
        </Container>
    );
}
export default Upper;
