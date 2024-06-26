import { Button, Heading ,Text} from "@chakra-ui/react"
import { Page, PageContent } from "../../components/Page"
import { Formiz, useForm } from "@formiz/core"
import { NewsForm } from "./NewsForm"
import { useCreateNews } from "./new.service"
import { useToastError, useToastSuccess } from "../../components/Toast"
import { useNavigate } from "react-router-dom"

const NewsCreate = () => {
    const toastError = useToastError();
    const toastSuccess = useToastSuccess();
  const navigate = useNavigate();
  
    const {mutate: createNews}= useCreateNews({
    
        onError: (error) => {
            const errorMessage = (error.response.data as { message: string[] })?.message[0] ?? "";
            toastError({
                title: "Error creating news",
                description: errorMessage,
            });
        },
        onSuccess: () => {
            toastSuccess({
                title: "News created",
            })        
            navigate('/news')
        }
    })
    const form = useForm({
        onValidSubmit: (values) => {
            createNews({...values, visibility: !!values?.visibility})
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