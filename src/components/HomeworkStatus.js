import React from "react";
// import 'https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.1/antd.min.css'
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import { Box, CircularProgress, Text, HStack, VStack , CircularProgressLabel} from "@chakra-ui/react";


function HomeworkStatus() {
    
    return (
        <Box  m={2} bgColor="gray.100" h={"fit-content"} w={"578px"} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <HStack spacing={4} fontSize="sm">
                <Box p={4} alignItems="center" >
                    <VStack>
                    <Text fontSize="sm" >
                        Attendance
                    </Text>
                    <CircularProgress thickness="15px" value={90} size="120px" >
                    <CircularProgressLabel fontSize="sm">90%</CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="xs" align="center" >
                        Last Absence
                        <br/>
                        2nd May, 12:00 PM
                    </Text>
                    </VStack>
                </Box>
                <Box p={4} alignItems="center" >
                    <VStack>
                    <Text fontSize="sm" >
                        Tests
                    </Text>
                    <CircularProgress thickness="15px" value={90} size="120px" >
                    <CircularProgressLabel fontSize="sm">90%</CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="xs" align="center" >
                        Last Test
                        <br/>
                        100%
                    </Text>
                    </VStack>
                </Box>
                <Box p={4} alignItems="center" >
                    <VStack>
                    <Text fontSize="sm" >
                        HW Rating
                    </Text>
                    <Rate allowHalf defaultValue={4.1}/>
                    <Text fontSize="xs" align="center" >
                        (4.1)
                    </Text>
                    <Text fontSize="xs" align="center" >
                        Last Homework
                        <br/>
                        4.5
                    </Text>
                    
                    </VStack>
                </Box>
            </HStack>
        </Box>
    );
}
export default HomeworkStatus;
