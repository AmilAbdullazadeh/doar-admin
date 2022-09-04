import { FC } from "react";
import { ChevronDown, Folder, File } from "react-feather";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "@doar/components";

const UploadDropdown: FC = () => {
    return (
        <Dropdown direction="down">
            <DropdownToggle
                size="xs"
                fullwidth
                hasIcon
                iconSize="xs"
                iconPosition="right"
                iconSpace="5px"
            >
                Upload
                <ChevronDown />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem path="#!">
                    <File />
                    <span>File</span>
                </DropdownItem>
                <DropdownItem path="#!">
                    <Folder />
                    <span>Folder</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default UploadDropdown;
