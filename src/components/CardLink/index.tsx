import { Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

type CardLinkProps = StackProps & {
    title: string;
    type: string;
    url:string,
}
export const CardLink: FC<CardLinkProps> = ({ title, type,url, ...rest }) => {
    return (
        <Stack as={Link} to={url}  p="4" flexDirection="column" justifyContent="center" minW="8rem" bgColor="#01427A" borderRadius="lg" {...rest} >
            <Text fontSize="3xl" fontWeight="bold" color="#FAFAFA" textAlign="center"> {title} </Text>
            <Text fontSize="lg" fontWeight="300" color="#FAFAFA" textAlign="center"> {type} </Text>
        </Stack>
    )
}