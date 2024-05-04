import { Button, Center, Heading, Spinner, Stack } from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import { GoEye } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Icon } from "../../components/Icon";
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
            <Stack spacing={4}>
                {!!news && news.filter(value=>value.visibility ||isAdmin).map((aNew)=>(
                    <Stack justifyContent="space-between" alignItems="center" direction="row" as={Link} to={`/news/${aNew.id}`} bg="#01427A" borderRadius="xl" color="gray.50" p="4" id={`${aNew.id}`}>
                        <Heading>{aNew.title}</Heading>
                        {isAdmin&&<Stack direction="row">{!aNew.visibility && <Icon icon={GoEye} fontSize="2xl" />}
                        <ResponsiveIconButton as={Link} to={`/admin/news/update/${aNew.id}`} icon={<BiEdit />} children="Update" /></Stack>}
                    </Stack>) 
                )}
            </Stack>
            </PageContent>
            </Page>);
    };

export default News;