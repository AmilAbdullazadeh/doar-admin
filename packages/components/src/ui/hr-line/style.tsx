import styled, {
    space,
    border,
    SpaceProps,
    BorderProps,
} from "@doar/shared/styled";

interface IProps extends SpaceProps, BorderProps {}

export const StyledHr = styled(
    ({ my, mt, mb, py, pt, pb, borderWidth, ...rest }) => <hr {...rest} />
)<IProps>`
    ${space};
    ${border};
`;
