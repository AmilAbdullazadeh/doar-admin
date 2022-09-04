import { FC } from "react";
import { Anchor } from "@doar/components";
import { StyledWrap, StyledTitle, StyledList } from "./style";

interface IProps {
    title: string;
    items: Array<{
        text: string;
        path: string;
    }>;
}

const InstallBox: FC<IProps> = ({ title, items }) => {
    return (
        <StyledWrap>
            <StyledTitle>{title}</StyledTitle>
            <StyledList>
                {items.map((item) => (
                    <li key={item.text}>
                        <Anchor path={item.path} variant="link1">
                            {item.text}
                        </Anchor>
                    </li>
                ))}
            </StyledList>
        </StyledWrap>
    );
};

export default InstallBox;
