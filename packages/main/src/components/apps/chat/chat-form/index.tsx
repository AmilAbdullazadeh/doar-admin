import { FC } from "react";
import { Plus, Image, Gift, Smile } from "react-feather";
import ReactTooltip from "react-tooltip";
import {
    StyledForm,
    StyldFile,
    StyledInput,
    StyledNav,
    StyledImage,
    StyledBtn,
} from "./style";

const ChatForm: FC = () => {
    return (
        <StyledForm>
            <>
                <StyldFile
                    htmlFor="add-file"
                    data-tip="Add File"
                    data-for="tooltip-gif"
                >
                    <Plus />
                </StyldFile>
                <input type="file" id="add-file" name="add-file" hidden />
                <ReactTooltip place="top" effect="solid" id="tooltip-gif" />
            </>

            <StyledInput
                type="text"
                id="message"
                name="message"
                placeholder="Message"
            />
            <StyledNav>
                <>
                    <StyledImage
                        htmlFor="add-image"
                        data-tip="Add Gif"
                        data-for="tooltip-gif"
                    >
                        <Image />
                    </StyledImage>
                    <input type="file" id="add-image" name="add-image" hidden />
                    <ReactTooltip place="top" effect="solid" id="tooltip-gif" />
                </>
                <StyledBtn data-for="tooltip-gift" data-tip="Add Gift">
                    <Gift />
                </StyledBtn>
                <ReactTooltip place="top" effect="solid" id="tooltip-gift" />
                <StyledBtn data-for="tooltip-smily" data-tip="Add Smiley">
                    <Smile />
                </StyledBtn>
                <ReactTooltip place="top" effect="solid" id="tooltip-smily" />
            </StyledNav>
        </StyledForm>
    );
};

export default ChatForm;
