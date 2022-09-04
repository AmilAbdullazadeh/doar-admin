import { FC, useState } from "react";
import { Folder } from "react-feather";
import { Anchor } from "@doar/components";
import FileDropdown from "../file-dropdown";
import DetailsModal from "../modal-details";
import ShareModal from "../modal-share";
import CopyModal from "../modal-copy";
import MoveModal from "../modal-move";
import { StyledMedia, StyledMediaBody } from "./style";

interface IProps {
    title: string;
    link: string;
    files: number;
    size: string;
}

const FolderPreview: FC<IProps> = ({ title, link, files, size }) => {
    const [showDetils, setShowDetails] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showCopy, setShowCopy] = useState(false);
    const [showMove, setShowMove] = useState(false);
    const handleDetails = () => {
        setShowDetails((prev) => !prev);
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
            <StyledMedia>
                <Folder />
                <StyledMediaBody>
                    <h6>
                        <Anchor path={link} variant="link2">
                            {title}
                        </Anchor>
                    </h6>
                    <span>
                        {files} files, {size}
                    </span>
                </StyledMediaBody>
                <FileDropdown
                    handleDetails={handleDetails}
                    handleShare={handleShare}
                    handleCopy={handleCopy}
                    handleMove={handleMove}
                />
            </StyledMedia>
            <DetailsModal show={showDetils} onClose={handleDetails} />
            <ShareModal show={showShare} onClose={handleShare} />
            <CopyModal show={showCopy} onClose={handleCopy} />
            <MoveModal show={showMove} onClose={handleMove} />
        </>
    );
};

export default FolderPreview;
