import { HStack, Stack, Text } from "@chakra-ui/react"
import { FieldInput } from "../../components/FieldInput"
import { FieldWysiwyg } from "../../components/FieldWysiwyg"
import { FieldSwitch } from "../../components/FieldSwitch"

export const NewsForm = () => {
    return (
        <Stack spacing={8}>
            <HStack 
            alignItems="flex-end"
            ><FieldInput label="Title" name="title" required="Title is required" />
            <FieldSwitch  flex="1" minW="13rem"  colorScheme="blue" name="visibility">
                  <Text as="span" ml={2}>
                    Is it a public news
                  </Text>
                </FieldSwitch>
                </HStack>
            <FieldWysiwyg label="Content" name="content" />
        
        </Stack>
    )
}