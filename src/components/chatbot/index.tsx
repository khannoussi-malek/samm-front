import { Box, BoxProps, IconButton } from "@chakra-ui/react";
import { FC, useState } from "react";
import { GoHubot } from "react-icons/go";



export const ChatBot:FC<BoxProps> = ({w,h,...props}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Box borderRadius="lg" overflow="hidden" boxShadow="dark" zIndex={99} w={isOpen?w : "3rem"} h={isOpen?h : "3rem"} {...props}>
        <IconButton aria-label="samm" m="2" fontSize="3xl" icon={<GoHubot/> } colorScheme="gray"  boxShadow="lg" position="absolute" bottom={0} right={0} onClick={()=>{
            setIsOpen(!isOpen)
        }}>
            ChatBot
        </IconButton>
       
            <iframe width={isOpen?"100%":"0"} height={isOpen?"100%":"0"} src="http://192.168.1.16:8000/gemini-bot-react/"/>
       
        </Box>
    );
}