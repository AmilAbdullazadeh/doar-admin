import { FC } from "react";
import { ArrowLeft } from "react-feather";
import Sender from "../../../../components/apps/mail/sender";
import ToolbarIcons from "../../../../components/apps/mail/toolbar-icons";
import MailBody from "../../../../components/apps/mail/mail-body";
import MailForm from "../../../../components/apps/mail/mail-form";
import ScrollBar from "../../../../components/scrollbar";
import { useAppDispatch } from "../../../../redux/hooks";
import { toggleBody } from "../../../../redux/slices/ui";
import { StyledMain, StyledHeader, StyledBody, StyledToggleBtn } from "./style";

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const bodyHandler = () => {
        dispatch(toggleBody());
    };
    return (
        <StyledMain>
            <StyledHeader>
                <StyledToggleBtn type="button" onClick={bodyHandler}>
                    <ArrowLeft />
                </StyledToggleBtn>
                <Sender
                    color="teal"
                    name="Reynante Labares"
                    time="Today, 11:40am"
                />
                <ToolbarIcons />
            </StyledHeader>
            <ScrollBar top="55px">
                <StyledBody>
                    <MailBody />
                    <MailForm placeholder="Type Here" />
                </StyledBody>
            </ScrollBar>
        </StyledMain>
    );
};

export default Main;
