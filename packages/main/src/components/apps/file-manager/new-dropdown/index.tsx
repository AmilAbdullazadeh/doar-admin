import { FC } from "react";
import { ChevronDown, Folder, File, FileText } from "react-feather";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    DropdownDivider,
} from "@doar/components";

const NewDropdown: FC = () => {
    return (
        <Dropdown direction="down">
            <DropdownToggle
                size="xs"
                color="white"
                fullwidth
                hasIcon
                iconSize="xs"
                iconPosition="right"
                iconSpace="5px"
                className="btn-white"
            >
                New
                <ChevronDown />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem path="#!">
                    <Folder />
                    <span>Folder</span>
                </DropdownItem>
                <DropdownItem path="#!">
                    <File />
                    <span>Notes</span>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem path="#!">
                    <FileText />
                    <span>Word Document</span>
                </DropdownItem>
                <DropdownItem path="#!">
                    <FileText />
                    <span>Powepoint</span>
                </DropdownItem>
                <DropdownItem path="#!">
                    <FileText />
                    <span>Excel Spreadsheet</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default NewDropdown;
