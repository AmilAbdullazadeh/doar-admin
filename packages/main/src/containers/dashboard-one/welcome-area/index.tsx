import { FC, useState } from "react";
import { Mail, Printer, File } from "react-feather";
import Breadcrumb from "../../../components/breadcrumb";
import ModalPrint from "../../../components/dashboard-one/modal-print";
import ModalReport from "../../../components/dashboard-one/modal-report";
import {
    StyledWelcomeArea,
    StyledWelcomeLeft,
    StyledWelcomeRight,
    StyledButton,
} from "./style";

const WelcomeArea: FC = () => {
    const [showPrintModal, setShowPrintModal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    const handlePrintModal = () => {
        setShowPrintModal((prev) => !prev);
    };
    const handleReportModal = () => {
        setShowReportModal((prev) => !prev);
    };
    return (
        <>
            <StyledWelcomeArea>
                <StyledWelcomeLeft>
                    <Breadcrumb
                        prev={[]}
                        title="Dashbaord"
                        wcText="Welcome To Dashboard"
                    />
                </StyledWelcomeLeft>
                <StyledWelcomeRight>
                    <StyledButton
                        size="sm"
                        color="white"
                        path="/apps/mail"
                        hasIcon
                    >
                        <Mail />
                        Email
                    </StyledButton>
                    <StyledButton
                        size="sm"
                        color="white"
                        hasIcon
                        ml="10px"
                        onClick={handlePrintModal}
                    >
                        <Printer />
                        Print
                    </StyledButton>
                    <StyledButton
                        size="sm"
                        ml="10px"
                        hasIcon
                        onClick={handleReportModal}
                    >
                        <File />
                        Generate Report
                    </StyledButton>
                </StyledWelcomeRight>
            </StyledWelcomeArea>
            <ModalPrint show={showPrintModal} onClose={handlePrintModal} />
            <ModalReport show={showReportModal} onClose={handleReportModal} />
        </>
    );
};

export default WelcomeArea;
