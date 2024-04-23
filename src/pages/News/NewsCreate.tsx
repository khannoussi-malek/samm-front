import { Heading ,Text} from "@chakra-ui/react"
import { Page, PageContent } from "../../components/Page"
import { Formiz, useForm } from "@formiz/core"
import { NewsForm } from "./NewsForm"

const NewsCreate = () => {

    const form = useForm()
    return (
        <Page containerSize="xl" >
        <PageContent  >
            <Heading>News</Heading>
            <Text>
                News content
            </Text>
            <Formiz connect={form} >
                <NewsForm/>
            </Formiz>
        </PageContent>
        </Page>
    )
}

export default NewsCreate