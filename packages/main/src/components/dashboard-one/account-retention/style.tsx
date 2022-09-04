import styled, {
    themeGet,
    color as colorProps,
    css,
} from "@doar/shared/styled";
import { CardHeader, CardBody } from "@doar/components";

export const StyledCardHeader = styled(({ ...props }) => (
    <CardHeader {...props} />
))`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
`;

export const StyledCardBody = styled(({ ...props }) => <CardBody {...props} />)`
    padding-top: 0;
`;

export const StyledCardBodyTitle = styled.h4`
    margin-bottom: 5px;
    font-weight: 400;
    letter-spacing: -0.5px;
    font-family: ${themeGet("fonts.rubik")};
`;

export const StyledCardBodySubtitle = styled(({ color, ...props }) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h6 {...props} />
))`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 10px;
    ${colorProps}
`;

export const StyledCardBodyText = styled.p`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledChart = styled.div`
    margin-left: -17px;
    margin-right: -17px;
    .apexcharts-xaxis-label {
        text-transform: uppercase;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .apexcharts-xaxis-label {
                fill: rgba(255, 255, 255, 0.4);
            }
        `}
`;
