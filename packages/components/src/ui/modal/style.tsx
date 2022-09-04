import styled, {
    css,
    device,
    themeGet,
    space,
    SpaceProps,
} from "@doar/shared/styled";

interface IModal {
    $show: boolean;
    $size?: "xl" | "lg" | "md" | "sm";
    $centered?: boolean;
}

interface IBackdrop {
    $show: boolean;
}

export const StyledBackdrop = styled.div<IBackdrop>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.15s linear;
    ${({ $show }) =>
        $show &&
        css`
            opacity: 0.5;
            visibility: visible;
        `}
`;

export const StyledModal = styled.div<IModal>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.15s linear;
    ${({ $show }) =>
        $show &&
        css`
            opacity: 1;
            visibility: visible;
        `}
    .modal-enter {
        opacity: 0.01;

        &.modal-dialog {
            transform: translateY(-50px);
        }
    }
    .modal-enter-done {
        opacity: 1;
        transition: all 150ms linear;

        &.modal-dialog {
            transform: translateY(0);
        }
    }
    .modal-exit {
        opacity: 1;

        &.modal-dialog {
            transform: translateY(0);
        }
    }
    .modal-exit-active {
        opacity: 0.01;
        transition: all 150ms linear;

        &.modal-dialog {
            transform: translateY(-50px);
        }
    }
    .modal-dialog {
        position: relative;
        width: auto;
        margin: 0.5rem;
        pointer-events: none;
        ${device.small} {
            max-width: 500px;
            margin: 1.75rem auto;
        }
        ${({ $size }) =>
            $size === "sm" &&
            css`
                ${device.small} {
                    max-width: 300px;
                }
            `}
        ${({ $size }) =>
            $size === "md" &&
            css`
                ${device.small} {
                    max-width: 500px;
                }
            `}
        ${({ $size }) =>
            $size === "lg" &&
            css`
                ${device.large} {
                    max-width: 800px;
                }
            `}
		${({ $size }) =>
            $size === "xl" &&
            css`
                ${device.large} {
                    max-width: 800px;
                }
                ${device.xlarge} {
                    max-width: 1140px;
                }
            `}
		${({ $centered }) =>
            $centered &&
            css`
                display: flex;
                align-items: center;
                min-height: calc(100% - 1rem);
                ${device.small} {
                    min-height: calc(100% - 3.5rem);
                }
            `}
    }

    .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid ${themeGet("colors.border")};
        outline: 0;
        border-radius: ${themeGet("radii.rounded")};
        ${(props) =>
            props.theme.name === "dark" &&
            css`
                background-color: ${themeGet("colors.gray900")};
            `}
    }
`;

export const StyledHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid ${themeGet("colors.border")};
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
`;

export const StyledTitle = styled.h6`
    margin-bottom: 0;
    line-height: 1.5;
`;

export const StyledClose = styled.button`
    font-weight: 300;
    font-size: 28px;
    line-height: 0.87;
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
    background-color: transparent;
    border: 0;
    appearance: none;
    color: ${themeGet("colors.text2")};
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
    cursor: pointer;
`;

export const StyledBody = styled(({ px, py, p, pt, pb, pl, pr, ...rest }) => (
    <div {...rest} />
))<SpaceProps>`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    ${space};
`;

export const StyledFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid ${themeGet("colors.border")};
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
    & > * {
        margin: ${themeGet("radii.rounded")};
    }
`;
