import { Stack } from "@chakra-ui/react";
import React from "react";

import ComentForm from "../components/ComentForm";

const Layout = () => {
    return (
        <Stack
            alignItems={"center"}
            height="100%"
            justifyContent={"center"}
            margin="auto"
            maxWidth={"600px"}
        >
            <ComentForm />
        </Stack>
    );
};

export default Layout;
