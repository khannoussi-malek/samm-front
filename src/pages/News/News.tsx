import { Box, Button, Center, Heading, Spinner, Stack } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Page, PageContent } from "../../components/Page";
import { ResponsiveIconButton } from "../../components/ResponsiveIconButton";
import { useAccount } from "../Auth/service";
import { useListNews } from "./new.service";


 const News = () => {
    const {news,isLoading,isError,refetch}=useListNews();
    const {isAdmin} = useAccount();
    return (<Page containerSize="xl" >
        <PageContent  >
            <Heading>News</Heading>
            <p>News content</p>
            {isAdmin &&<Stack direction="row" spacing={4} justifyContent="flex-end" >
                 <ResponsiveIconButton as={Link} to="/admin/news" icon={<LuPlus />} children="Add news" />
            </Stack>}
            {isLoading && <Center ><Spinner /></Center>}
            {isError && <Center ><Button onClick={()=>refetch()} >Refetch</Button></Center>}
            {!news?.length && <Center ><p>No news</p></Center>}
            <Stack>
            {!!news && news.map((aNew)=>(
                <Box id={`${aNew.id}`}>
                    <Heading>{aNew.title}</Heading>
                    <p>{aNew.content}</p>
                </Box>) )}</Stack>
            </PageContent>
            </Page>);
    };

export default News;