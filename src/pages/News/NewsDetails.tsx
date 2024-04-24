import { Box, Heading,  IconButton,  Spinner } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import { Page, PageContent } from "../../components/Page";
import { useNews } from "./new.service";

const NewsDetails = () => {
    const { id } = useParams();
    const {news,isLoading,isError,isSuccess}=useNews(+id);
  const navigate = useNavigate();
  return (
        <Page containerSize="xl"  >
            <PageContent  >
              <Box>
                <IconButton
                aria-label="Go Back"
                icon={<LuArrowLeft/>}
                onClick={() => navigate(-1)}
                />
                </Box>
                
                {isLoading && <Spinner />}
                {isError && <Box>Error</Box>}
            {isSuccess && <>
                    <Heading>{news.title}</Heading>
                    <Box dangerouslySetInnerHTML={{ __html: news.content }} /> 
                </>}
            </PageContent>
            </Page>
    );
    }

export default NewsDetails