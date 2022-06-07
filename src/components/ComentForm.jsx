import { Button, FormControl, ScaleFade, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

import ComentList from "./ComentList";

const ComentForm = () => {
    const [comentsArray, setComentsArray] = useState([]);
    const [inputComent, setInputComent] = useState("");
    const [inputReply, setInputReply] = useState("");
    const [fade, setFade] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setComentsArray([
            ...comentsArray,
            { coment: inputComent, id: Date.now(), reply: inputReply },
        ]);
        setInputComent("");
        setFade(true);
    };

    return (
        <>
            <Stack borderRadius="lg" borderWidth={"1px"} p={6} width={"100%"}>
                <FormControl onSubmit={handleSubmit}>
                    <Stack
                        alignItems="center"
                        direction={"row"}
                        justifyContent={"space-between"}
                        spacing={6}
                    >
                        <Textarea
                            placeholder="comentario..."
                            value={inputComent}
                            onChange={(e) => setInputComent(e.target.value)}
                        />
                        <Button onClick={handleSubmit}>Send</Button>
                    </Stack>
                </FormControl>
            </Stack>
            <ScaleFade in={fade} initialScale={0.5}>
                <ComentList comentsArray={comentsArray} reply={setInputReply} />
            </ScaleFade>
        </>
    );
};

export default ComentForm;
