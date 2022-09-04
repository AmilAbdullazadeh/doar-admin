import styled, { css, themeGet } from "@doar/shared/styled";

interface IProps {
    $show: boolean;
}

export const StyledToolbar = styled.div<IProps>`
    position: relative;
    margin-left: auto;
    @media (max-width: 575px) {
        .nav-icon {
            display: none;
            ${({ $show }) =>
                $show &&
                css`
                    display: block;
                    position: absolute;
                    right: 0;
                    width: 175px;
                    height: 75px;
                    border: 1px solid ${themeGet("colors.border")};
                    padding: 10px;
                    background: #ffff;
                    top: 25px;
                    .nav-link {
                        margin-top: 4px;
                        margin-bottom: 4px;
                        display: inline-block;
                        & + .nav-link {
                            margin-left: 15px;
                        }
                    }
                `}
        }
    }

    .option-btn {
        display: none;
        @media (max-width: 575px) {
            display: block;
            padding: 0;
            border: 0;
            background: transparent;
            color: #8392a5;
            svg {
                width: 18px;
                height: 18px;
            }
        }
    }
`;
