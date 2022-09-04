import { FC } from "react";
import { Heading, Button } from "@doar/components";
import { StyledBar } from "./style";

const CallLogs: FC = () => {
    return (
        <>
            <StyledBar>
                <Heading fontSize="15px" mb="0px">
                    Call &amp; Message Logs
                </Heading>
                <Button color="white" size="sm">
                    Clear History
                </Button>
            </StyledBar>
        </>
    );
};

export default CallLogs;
