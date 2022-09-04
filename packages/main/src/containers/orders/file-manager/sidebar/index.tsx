import { FC } from "react";
import NewDropdown from "../../../../components/apps/file-manager/new-dropdown";
import UploadDropdown from "../../../../components/apps/file-manager/upload-dropdown";
import MyDrive from "../../../../components/apps/file-manager/my-drive";
import FileLibrary from "../../../../components/apps/file-manager/file-library";
import StorageStatus from "../../../../components/apps/file-manager/storage-status";
import ScrollBar from "../../../../components/scrollbar";
import { useAppSelector } from "../../../../redux/hooks";
import { StyledSidebar, StyledHeader, StyledBody } from "./style";

const Sidebar: FC = () => {
    const { sidebar } = useAppSelector((state) => state.ui);
    return (
        <StyledSidebar $show={sidebar}>
            <StyledHeader>
                <NewDropdown />
                <UploadDropdown />
            </StyledHeader>
            <ScrollBar top="55px">
                <StyledBody>
                    <MyDrive />
                    <FileLibrary />
                    <StorageStatus />
                </StyledBody>
            </ScrollBar>
        </StyledSidebar>
    );
};

export default Sidebar;
