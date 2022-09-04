import { FC, useState } from "react";
import { Star } from "react-feather";
import { Heading, Text, Anchor } from "@doar/components";
import FileDropdown from "../file-dropdown";
import DetailsModal from "../modal-details";
import ShareModal from "../modal-share";
import CopyModal from "../modal-copy";
import MoveModal from "../modal-move";
import {
    StyledCard,
    StyledThumb,
    StyledBody,
    StyledFooter,
    StyledMarker,
} from "./style";

interface IProps {
    icon: string;
    title: string;
    link: string;
    size: string;
    accessed?: string;
    type?: string;
    color: string;
}

const FilePreview: FC<IProps> = ({
    icon,
    title,
    link,
    size,
    accessed,
    type,
    color,
}) => {
    const [showDetils, setShowDetails] = useState(false);
    const [important, setImportant] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showCopy, setShowCopy] = useState(false);
    const [showMove, setShowMove] = useState(false);
    const handleDetails = () => {
        setShowDetails((prev) => !prev);
    };
    const handleImportant = () => {
        setImportant((prev) => !prev);
    };
    const handleShare = () => {
        setShowShare((prev) => !prev);
    };
    const handleCopy = () => {
        setShowCopy((prev) => !prev);
    };
    const handleMove = () => {
        setShowMove((prev) => !prev);
    };
    return (
        <>
            <StyledCard>
                <FileDropdown
                    handleDetails={handleDetails}
                    handleImportant={handleImportant}
                    marked={important}
                    handleShare={handleShare}
                    handleCopy={handleCopy}
                    handleMove={handleMove}
                />
                <StyledThumb color={color}>
                    <i className={icon} />
                </StyledThumb>
                <StyledBody>
                    <Heading mb="0px">
                        <Anchor path={link} variant="link2">
                            {title}
                        </Anchor>
                    </Heading>
                    {type && <Text>{type}</Text>}
                    <Text as="span">{size}</Text>
                </StyledBody>
                {accessed && (
                    <StyledFooter>
                        <Text as="span" display={["none", "inline"]}>
                            Last accessed:
                        </Text>{" "}
                        {accessed}
                    </StyledFooter>
                )}
                {important && (
                    <StyledMarker>
                        <Star />
                    </StyledMarker>
                )}
            </StyledCard>
            <DetailsModal show={showDetils} onClose={handleDetails} />
            <ShareModal show={showShare} onClose={handleShare} />
            <CopyModal show={showCopy} onClose={handleCopy} />
            <MoveModal show={showMove} onClose={handleMove} />
        </>
    );
};

export default FilePreview;
