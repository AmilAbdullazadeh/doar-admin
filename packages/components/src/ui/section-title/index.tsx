import { FC } from "react";
import { TypographyProps } from "@doar/shared/styled";
import { StyledTitle, StyledDesc } from "./style";

interface IProps {
    title: string;
    desc?: string;
    descProps?: TypographyProps;
    titleProps?: TypographyProps;
}

const SectionTitle: FC<IProps> = ({ title, desc, descProps, titleProps }) => {
    return (
        <>
            <StyledTitle $hasDesc={Boolean(desc)} {...titleProps}>
                {title}
            </StyledTitle>
            {desc && (
                <StyledDesc
                    {...descProps}
                    dangerouslySetInnerHTML={{ __html: desc }}
                />
            )}
        </>
    );
};

export default SectionTitle;
