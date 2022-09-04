import { FC, useState } from "react";
import {
    Archive,
    Slash,
    Mail,
    Folder,
    Tag,
    Star,
    Trash,
    Printer,
    MoreVertical,
} from "react-feather";
import ReactTooltip from "react-tooltip";
import { Nav, NavLink, NavDivider } from "@doar/components";
import { StyledToolbar } from "./style";

const ToolbarIcons: FC = () => {
    const [show, setShow] = useState(false);
    const handleNav = () => {
        setShow((prev) => !prev);
    };
    return (
        <StyledToolbar $show={show}>
            <Nav customStyle="icon">
                <NavLink
                    path="#!"
                    data-for="tooltip-marchive"
                    data-tip="Archive"
                >
                    <Archive />
                </NavLink>
                <ReactTooltip
                    place="bottom"
                    effect="solid"
                    id="tooltip-marchive"
                />
                <NavLink
                    path="#!"
                    data-for="tooltip-mspam"
                    data-tip="Report Spam"
                >
                    <Slash />
                </NavLink>
                <ReactTooltip
                    place="bottom"
                    effect="solid"
                    id="tooltip-mspam"
                />
                <NavLink
                    path="#!"
                    data-for="tooltip-munread"
                    data-tip="Mark Unread"
                >
                    <Mail />
                </NavLink>
                <ReactTooltip
                    place="bottom"
                    effect="solid"
                    id="tooltip-munread"
                />
                <NavLink
                    path="#!"
                    data-for="tooltip-mlabel"
                    data-tip="Add Label"
                >
                    <Folder />
                </NavLink>
                <ReactTooltip
                    place="bottom"
                    effect="solid"
                    id="tooltip-mlabel"
                />
                <NavLink path="#!" data-for="tooltip-mtag" data-tip="Add Tag">
                    <Tag />
                </NavLink>
                <ReactTooltip place="bottom" effect="solid" id="tooltip-mtag" />
                <NavDivider />
                <NavLink
                    path="#!"
                    data-for="tooltip-mimportant"
                    data-tip="Make Important"
                >
                    <Star />
                </NavLink>
                <ReactTooltip
                    place="bottom"
                    effect="solid"
                    id="tooltip-mimportant"
                />
                <NavLink path="#!" data-for="tooltip-mtrash" data-tip="Trash">
                    <Trash />
                </NavLink>
                <ReactTooltip
                    place="bottom"
                    effect="solid"
                    id="tooltip-mtrash"
                />
                <NavLink path="#!" data-for="tooltip-mprint" data-tip="Print">
                    <Printer />
                </NavLink>
                <ReactTooltip
                    place="bottom"
                    effect="solid"
                    id="tooltip-mprint"
                />
            </Nav>
            <button type="button" className="option-btn" onClick={handleNav}>
                <MoreVertical />
            </button>
        </StyledToolbar>
    );
};

export default ToolbarIcons;
