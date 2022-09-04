import styled, { css, space, SpaceProps } from "@doar/shared/styled";

interface IProps extends SpaceProps {
    $size?: "xs" | "sm" | "md" | "lg";
    $vertical?: boolean;
}

export const StyledGroup = styled(({ m, ml, mr, mt, mb, ...rest }) => (
    <div {...rest} />
))<IProps>`
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    ${space};
    ${({ $vertical }) =>
        ($vertical === false || !$vertical) &&
        css`
            & > .btn {
                position: relative;
                flex: 1 1 auto;
                &:not(:last-of-type) {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                &:not(:first-of-type) {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    margin-left: -1px;
                }
            }
        `}

    ${({ $size }) =>
        $size === "xs" &&
        css`
            & > .btn {
                font-size: 12px;
                padding: 5px 0.9375rem;
                border-radius: 0.25rem;
            }
        `}
    ${({ $size }) =>
        $size === "sm" &&
        css`
            & > .btn {
                font-size: 13px;
                padding: 0.391rem 15px;
                border-radius: 0.25rem;
            }
        `}
    ${({ $size }) =>
        $size === "md" &&
        css`
            & > .btn {
                padding: 0.46875rem 0.9375rem;
                font-size: 0.875rem;
                border-radius: 0.25rem;
            }
        `}
    ${({ $size }) =>
        $size === "lg" &&
        css`
            & > .btn {
                font-size: 0.875rem;
                border-radius: 0.25rem;
                padding: 0.6rem 1rem;
                line-height: 1.5;
            }
        `}
    ${({ $vertical }) =>
        $vertical === true &&
        css`
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            & > .btn {
                width: 100%;
                &:not(:last-of-type) {
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                &:not(:first-of-type) {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    margin-top: -1px;
                }
            }
        `}
`;

export const StyledButtonToolbar = styled(({ m, ml, mr, mt, mb, ...rest }) => (
    <div {...rest} />
))<SpaceProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    ${space}
`;
