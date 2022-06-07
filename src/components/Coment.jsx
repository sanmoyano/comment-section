import { Button, FormControl, Input, ScaleFade, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

// import Reply from "./Reply";

const Coment = ({ coment, reply, replyFuncion }) => {
    const [display, setDisplay] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setDisplay(!display);
    };

    console.log(reply);

    const cambiarReply = (reply) => {
        replyFuncion("se ejecuta con el send del primer formulario");
    };

    cambiarReply(reply);

    return (
        <Stack alignItems={"center"}>
            <Stack alignItems="center" direction={"row"}>
                <Text>{coment}</Text>
                <Button onClick={handleClick}>{display ? "Hide" : "Replay"}</Button>
            </Stack>
            <ScaleFade in={display} initialScale={0.5} unmountOnExit={true}>
                <Stack display={display ? "block" : "none"}>
                    {/* <Reply reply={reply} replyFuncion={replyFuncion} /> */}
                    <Input
                        placeholder="reply..."
                        value={reply}
                        onChange={(e) => replyFuncion(e.target.value)}
                    />
                    <Button>Send</Button>
                </Stack>
            </ScaleFade>
        </Stack>
    );
};

export default Coment;
