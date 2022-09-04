import { FC } from "react";
import {
    StyledItem,
    StyledThumb,
    StyledBody,
    StyledCategory,
    StyledTitle,
    StyledExcerpt,
} from "./style";

interface IProps {
    image: string;
    category: string;
    title: string;
    excerpt: string;
    path: string;
}

const Item: FC<IProps> = ({ image, category, title, excerpt, path }) => {
    return (
        <StyledItem>
            <StyledThumb>
                <a href={path}>
                    <img src={image} alt={title} />
                </a>
            </StyledThumb>
            <StyledBody>
                <StyledCategory href={path}>{category}</StyledCategory>
                <StyledTitle>
                    <a href={path}>{title}</a>
                </StyledTitle>
                <StyledExcerpt>{excerpt}</StyledExcerpt>
            </StyledBody>
        </StyledItem>
    );
};

export default Item;
