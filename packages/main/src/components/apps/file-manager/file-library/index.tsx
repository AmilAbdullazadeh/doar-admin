import { FC } from "react";
import { File, Image, Video, Music, Package } from "react-feather";
import { Nav, NavLink } from "@doar/components";
import Label from "../label";
import { StyledWrap } from "./style";

const FileLibrary: FC = () => {
    return (
        <>
            <StyledWrap>
                <Label pl={10}>File Library</Label>
                <Nav customStyle="sidebar">
                    <NavLink path="#!">
                        <File />
                        <span>Documents</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Image />
                        <span>Images</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Video />
                        <span>Videos</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Music />
                        <span>Audio</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Package />
                        <span>Zip Files</span>
                    </NavLink>
                </Nav>
            </StyledWrap>
        </>
    );
};

export default FileLibrary;
