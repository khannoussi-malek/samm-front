import { Button, Heading } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import { useParams } from "react-router-dom";
import { Page, PageContent } from "../../components/Page";
import { NewsForm } from "./NewsForm";
import { useNews } from "./new.service";


const NewsUpdate = () => {
    const { id } = useParams();
    const {news,isSuccess}=useNews(+id);
    const form = useForm({
        initialValues: news,
        onValidSubmit: (values) => {
            console.log(values)
            // updateNews(+id,{...values, visibility: !!values?.visibility})
        }
    })
    return (
        <Page containerSize="xl"  >
            <PageContent  >
                {id}
                {isSuccess &&
                <><Heading>update : {news.title}</Heading>
               <Formiz connect={form} autoForm >
                <NewsForm/>
                <Button type="submit" >Submit</Button>
            </Formiz></>}
            </PageContent>
            </Page>
    )
}

export default NewsUpdate