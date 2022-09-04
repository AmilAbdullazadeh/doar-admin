import { FC } from "react";
import WidgetTitle from "../widget-title-2";
import { StyledList, StyledItem, StyledSkill } from "./style";

const UserSkills: FC = () => {
    return (
        <>
            <WidgetTitle>Skills</WidgetTitle>
            <StyledList>
                <StyledItem>
                    <StyledSkill path="#!">HTML5</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">Sass</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">CSS</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">React</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">jQuery</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">Angular</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">Wordpress</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">Photoshop</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">PHP</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">Node</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">Git</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">Front-End Development</StyledSkill>
                </StyledItem>
                <StyledItem>
                    <StyledSkill path="#!">Web Design</StyledSkill>
                </StyledItem>
            </StyledList>
        </>
    );
};

export default UserSkills;
