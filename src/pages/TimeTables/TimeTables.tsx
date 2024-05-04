import { Box, Heading } from "@chakra-ui/react";
import { Page, PageContent } from "../../components/Page";
import * as timeTable from './data.json';
const TimeTables = () => {
    return (
      <Page containerSize="xl">
        <PageContent>
          <Heading>Time Tables</Heading>
          <p>Time Tables Content</p>
          <Box dangerouslySetInnerHTML={{ __html: timeTable.timeTable }} /> 
          
        </PageContent>
      </Page>
    );
  };
  
  export default TimeTables;