import React from "react";
import ProfileBox from './ProfileBox'
import HomeworkStatus from './HomeworkStatus'
import { HStack} from "@chakra-ui/react";


function Upper() {
    
    return (
        <HStack m={4}>
        <ProfileBox/>
        <HomeworkStatus/>   
        </HStack>
    );
}
export default Upper;
