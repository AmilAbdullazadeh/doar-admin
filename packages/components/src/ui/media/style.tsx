import styled, {
    layout,
    space,
    flexbox,
    css,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
} from "@doar/shared/styled";

interface IMedia extends SpaceProps, FlexboxProps, LayoutProps {
    $el: string;
}

export const StyledMedia = styled(
    ({ m, ml, mr, mt, mb, display, alignItems, $el, ...props }) => (
        <div {...props} />
    )
)<IMedia>`
    ${({ $el }) =>
        $el !== "ul" &&
        css`
            display: flex;
            align-items: flex-start;
        `}
    ${layout};
    ${space};
    ${flexbox};
`;

interface IMediaLeft extends SpaceProps, LayoutProps {}

export const StyledMediaLeft = styled(({ width, mr, ml, ...props }) => (
    <div {...props} />
))<IMediaLeft>`
    ${layout};
    ${space};
    ${(props) =>
        props.$alignMent === "middle" &&
        css`
            align-self: center;
        `}
    ${(props) =>
        props.$alignMent === "end" &&
        css`
            align-self: flex-end;
        `}
    img {
        max-width: 100%;
    }
`;

export const StyledMediaBody = styled(
    ({ width, m, mr, ml, mt, mb, px, ...props }) => <div {...props} />
)<SpaceProps>`
    ${space};
    flex: 1;
`;
