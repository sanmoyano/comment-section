import { Stack } from "@chakra-ui/react";

import Coment from "./Coment";
const ComentList = ({ comentsArray, reply }) => {
    return (
        <Stack direction={"column"}>
            {comentsArray.map((coment) => (
                <Coment
                    key={coment.id}
                    coment={coment.coment}
                    reply={coment.reply}
                    replyFuncion={reply}
                />
            ))}
        </Stack>
    );
};

export default ComentList;
