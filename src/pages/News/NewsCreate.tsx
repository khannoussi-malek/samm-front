import { Button, Heading ,Text} from "@chakra-ui/react"
import { Page, PageContent } from "../../components/Page"
import { Formiz, useForm } from "@formiz/core"
import { NewsForm } from "./NewsForm"
import { useCreateNews } from "./new.service"
import { useToastError, useToastSuccess } from "../../components/Toast"

const NewsCreate = () => {
    const toastError = useToastError();
    const toastSuccess = useToastSuccess();

    const {mutate: createNews}= useCreateNews({
    
        onError: (error) => {
            toastError({
                title:"Error creating news",
                description: error.response.data?.message[0] ??"",
              });
        },
        onSuccess: () => {
            toastSuccess({
                title:"News created",
            })        
        }
    })
    const form = useForm({
        onValidSubmit: (values) => {
            console.log(values)
            createNews(values)
        }
    })
    return (
        <Page containerSize="xl" >
        <PageContent  >
            <Heading>News</Heading>
            <Text>
                News content
            </Text>
            <Formiz connect={form} autoForm >
                <NewsForm/>
                <Button type="submit" >Submit</Button>
            </Formiz>
        </PageContent>
        </Page>
    )
}

export default NewsCreate