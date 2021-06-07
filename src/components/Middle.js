import React from "react";
import { Divider,Text , HStack, Button} from "@chakra-ui/react";
export default function Middle(){
    return (
        <HStack w={"1300px"}>
            <Text align="center">
                Activites Scheduled
            </Text>
            <Divider    />
            <Button colorScheme="green">+ Schedule</Button>
        </HStack>
    );
}