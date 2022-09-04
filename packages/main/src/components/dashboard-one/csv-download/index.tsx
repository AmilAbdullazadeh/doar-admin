import { FC } from "react";
import { Media, MediaBody } from "@doar/components";
import { Download } from "react-feather";
import { StyledCard, StyledIcon, StyledText, StyledTitle } from "./style";

const CSVDownload: FC = () => {
    return (
        <StyledCard>
            <Media>
                <StyledIcon>
                    <Download />
                </StyledIcon>
                <MediaBody ml="20px">
                    <StyledTitle>
                        Download your earnings in CSV format.
                    </StyledTitle>
                    <StyledText>
                        Open it in a spreadsheet and perform your own
                        calculations, graphing etc. The CSV file contains
                        additional details, such as the buyer location.
                    </StyledText>
                </MediaBody>
            </Media>
        </StyledCard>
    );
};

export default CSVDownload;
