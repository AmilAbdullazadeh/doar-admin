import styled, { themeGet, css } from "@doar/shared/styled";

interface IProps {
    $show: boolean;
}

export const StyledDatePicker = styled.div<IProps>`
    position: relative;
    .calendar {
        position: absolute;
        box-shadow: 0 30px 40px 0 ${themeGet("colors.border")};
        background-color: #fff;
        visibility: hidden;
        opacity: 0;
        z-index: 9999;
        transition: ${themeGet("transition")};
        ${({ $show }) =>
            $show &&
            css`
                visibility: visible;
                opacity: 1;
            `}
    }
`;
