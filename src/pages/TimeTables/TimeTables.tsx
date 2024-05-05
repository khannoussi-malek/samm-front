import { Heading } from "@chakra-ui/react";
import { Page, PageContent } from "../../components/Page";

import { TimeTable } from "../../components/TimeTable";

const TimeTables = () => {

    return (
      <Page containerSize="xl">
        <PageContent>
          <Heading>Time Tables</Heading>
          <p>Time Tables Content</p>
         <TimeTable defaultClassCode="ING-A2-GL-01" isForAll />
          
        </PageContent>
      </Page>
    );
  };
  
  export default TimeTables;