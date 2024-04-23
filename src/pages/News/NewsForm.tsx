import { Stack } from "@chakra-ui/react"
import { FieldInput } from "../../components/FieldInput"
import { FieldWysiwyg } from "../../components/FieldWysiwyg"

export const NewsForm = () => {
    return (
        <Stack>
            <FieldInput label="Title" name="title" />
            <FieldWysiwyg  name="content" />
        </Stack>
    )
}