import { FC, useState } from "react";
import { Download, Share2, Eye } from "react-feather";
import { Col, Card, Media, MediaBody } from "@doar/components";
import ModalExport from "../../../components/dashboard-two/modal-export";
import ModalShare from "../../../components/dashboard-two/modal-share";
import {
    StyledBody,
    StyledAvatar,
    StyledTitle,
    StyledMediaBottom,
    StyledBTCNumber,
    StyledBTCRate,
    StyledRight,
    StyledButton,
} from "./style";

const RowOne: FC = () => {
    const [showExportModal, setShowExportModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const handleShowExportModal = () => {
        setShowExportModal((prev) => !prev);
    };
    const handleShowShareModal = () => {
        setShowShareModal((prev) => !prev);
    };
    return (
        <>
            <Col col={12}>
                <Card>
                    <StyledBody>
                        <Media>
                            <StyledAvatar>
                                <i className="fab fa-bitcoin" />
                            </StyledAvatar>
                            <MediaBody ml="15px">
                                <StyledTitle>
                                    Buy Price <span>(24KT)</span>
                                </StyledTitle>
                                <StyledMediaBottom>
                                    <StyledBTCNumber>$3,972.87</StyledBTCNumber>
                                    <StyledBTCRate>
                                        -$7.98(0.2006%)
                                    </StyledBTCRate>
                                </StyledMediaBottom>
                            </MediaBody>
                        </Media>
                        <StyledRight>
                            <StyledButton
                                color="white"
                                size="sm"
                                hasIcon
                                onClick={handleShowExportModal}
                            >
                                <Download size={14} strokeWidth="2.5px" />
                                Export CSV
                            </StyledButton>
                            <StyledButton
                                color="white"
                                size="sm"
                                hasIcon
                                mt={["5px", "0px"]}
                                ml={[null, "5px"]}
                                onClick={handleShowShareModal}
                            >
                                <Share2 size={14} strokeWidth="2.5px" />
                                Share
                            </StyledButton>
                            <StyledButton
                                color="white"
                                size="sm"
                                hasIcon
                                mt={["5px", "0px"]}
                                ml={[null, "5px"]}
                                path="#!"
                            >
                                <Eye size={14} strokeWidth="2.5px" />
                                Watch
                            </StyledButton>
                        </StyledRight>
                    </StyledBody>
                </Card>
            </Col>
            <ModalExport
                show={showExportModal}
                onClose={handleShowExportModal}
            />
            <ModalShare show={showShareModal} onClose={handleShowShareModal} />
        </>
    );
};

export default RowOne;
