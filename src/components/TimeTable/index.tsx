import { Box } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { FC, useState } from "react";
import timeTable from "./timetables.json"

type TimeTableProps ={
    defaultClassCode?: string;
    isForAll ?: boolean;
}
export const TimeTable:FC<TimeTableProps> = ({defaultClassCode="ING-A1-01",isForAll=false}) => {
    const [classCode, setClassCode] = useState(defaultClassCode);

    return (<>
        {isForAll && <Select 
        onChange={(v)=>setClassCode(v.value)} 
        options={Object.keys(timeTable).map((key) => ({ label: key, value: key }))} 
        />}

        <Box dangerouslySetInnerHTML={{ __html: timeTable[classCode] }} /> 
        </>
    );
}