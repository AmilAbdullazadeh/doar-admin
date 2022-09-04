import { FC } from "react";
import { Edit3, Image, Video, FileText } from "react-feather";
import ReactTooltip from "react-tooltip";
import {
    StyledWrap,
    StyledShare,
    StyledStatusInput,
    RightBtn,
    RightBtnLink,
} from "./style";

const UpdateOption: FC = () => {
    return (
        <StyledWrap>
            <StyledShare>
                <Edit3 width={18} height={18} />
                <StyledStatusInput>Share an Update</StyledStatusInput>
            </StyledShare>
            <RightBtn>
                <RightBtnLink
                    href="#!"
                    data-for="tooltip-photo"
                    data-tip="Publish Photo"
                >
                    <Image width={18} height={18} />
                </RightBtnLink>
                <ReactTooltip place="top" effect="solid" id="tooltip-photo" />
            </RightBtn>
            <RightBtn>
                <RightBtnLink
                    href="#!"
                    data-for="tooltip-video"
                    data-tip="Publish Video"
                >
                    <Video width={18} height={18} />
                </RightBtnLink>
                <ReactTooltip place="top" effect="solid" id="tooltip-video" />
            </RightBtn>
            <RightBtn>
                <RightBtnLink
                    href="#!"
                    data-for="tooltip-file"
                    data-tip="Publish File"
                >
                    <FileText width={18} height={18} />
                    <ReactTooltip
                        place="top"
                        effect="solid"
                        id="tooltip-file"
                    />
                </RightBtnLink>
            </RightBtn>
        </StyledWrap>
    );
};

export default UpdateOption;
