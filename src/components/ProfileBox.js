import React from "react";
import { Box,Text, Avatar, Icon , HStack, Button} from "@chakra-ui/react";
import { AiOutlineUserAdd, AiOutlineEdit, AiOutlineUser, AiOutlineFieldTime } from 'react-icons/ai';

function ProfileBox() {
    const property = {
        beds: 3,
        baths: 2,
        title: "Batch Name | PHY_B1 ",
        studentName: "Abhijeet Prasad",
        studentCount: "125 Students",
        activityName: "Upcoming <Activity>",
        date: "Thu, 25th May"
               
    };

    return (
        <Box m={2} bgColor="gray.100" w={"380px"} borderWidth="1px" borderRadius="lg" overflow="hidden">
            
            <Box p={3}>
                <HStack spacing="165px" >
                <Box
                    mt="2"
                    fontWeight="bold"
                    as="h3"
                    lineHeight="tight"
                    isTruncated
                >
                    {property.title}
                       
                </Box>
                <Icon as={AiOutlineEdit} />
                </HStack>
            </Box>

                <Box px={6} paddingBottom={2}>
                <HStack spacing="180px">
                    <Box as="span" fontSize="sm">
                        <Avatar
                            p={3}
                            size="sm"
                            name="Abhijeet Prasad"
                            src="https://bit.ly/broken-link"
                        />{" "}
                        {property.studentName}
                    </Box>
                    
                    <Icon  as={AiOutlineUserAdd} />
                    </HStack>
                </Box>
                
                <Box px={6} paddingBottom={2} fontSize="sm" >
                    <Box as="span" color="gray.500" >
                        <Avatar
                            size="sm"
                            icon={<AiOutlineUser />}
                        />{" "}
                    </Box>
                    {property.studentCount}
                    
                </Box>

                <Box px={6} paddingBottom={2} fontSize="sm" >
                    <HStack spacing="110px">
                    <Box as="span">
                        <Avatar
                            size="sm"
                            icon={<AiOutlineFieldTime />}
                        />{" "}
                        {property.activityName}
                    </Box>
                    
                    <Button size="xs">
                        View
                    </Button>
                    </HStack>
                    <Text px={8} fontSize="xs" align="left" fontWeight="semibold">
                        Thu, 25th May
                        <br/>
                        12:00PM - 12:00 PM
                    </Text>
                    
                    
                    
                </Box>
            
        </Box>
    );
}
export default ProfileBox;
