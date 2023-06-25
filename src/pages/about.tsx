import {useLoaderData} from "react-router-dom";
import {Center} from "@mantine/core";

export const loader = () => {
    return {
        content: 'conteúdo'
    }
}

export default function AboutPage() {
    const data = useLoaderData() as { content: string }

    return (
        <Center h={300} mx="auto" bg="red">
            {data.content}
        </Center>
    )
}
