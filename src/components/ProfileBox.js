import React from "react";
import { Box, Avatar, Icon , HStack, Button} from "@chakra-ui/react";
import { AiOutlineUserAdd, AiOutlineEdit, AiOutlineUser, AiOutlineFieldTime } from 'react-icons/ai';

function ProfileBox() {
    const property = {
        beds: 3,
        baths: 2,
        title: "Batch Name | PHY_B1 ",
        studentName: "Abhijeet Prasad",
        studentCount: "125 Students",
        activityName: "Upcoming <Activity>",
    };

    return (
        <Box w={"380px"}  borderWidth="1px" borderRadius="lg" overflow="hidden">
            
            <Box p={4}>
                <HStack spacing="90px">
                <Box
                    mt="2"
                    fontWeight="bold"
                    as="h3"
                    lineHeight="tight"
                    isTruncated
                >
                    {property.title}
                       
                </Box>
                <Icon  as={AiOutlineEdit} />
                </HStack>
            </Box>

                <Box px={6} paddingBottom={2}>
                <HStack spacing="100px">
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
                    <HStack spacing="90px">
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
                </Box>
            
        </Box>
    );
}
export default ProfileBox;
