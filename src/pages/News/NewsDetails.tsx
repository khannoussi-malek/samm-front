import { Heading } from "@chakra-ui/react";
import { Page, PageContent } from "../../components/Page";

const NewsDetails = () => {
    // const {news,isLoading,isError,refetch}=useNews();
    return (
        <Page containerSize="xl" >
            <PageContent  >

            <Heading>NewsDetails</Heading>
            <p>NewsDetails content</p>
            </PageContent>
            </Page>
    );
    }

export default NewsDetails