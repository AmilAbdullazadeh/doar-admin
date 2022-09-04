import { FC, useEffect } from "react";
import { Users, PhoneCall, Star, Tag, Upload, Settings } from "react-feather";
import {
    TabWrap,
    TabList,
    Tab,
    TabContent,
    TabPanel,
    Anchor,
} from "@doar/components";
import { useWindowSize } from "@doar/shared/hooks";
import Scrollbar from "../../../../components/scrollbar";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { toggleSidebar } from "../../../../redux/slices/ui";
import SidebarHeader from "../../../../components/apps/contacts/sidebar-header";
import AllContacts from "../../../../components/apps/contacts/all-contacts";
import RecentlyContacted from "../../../../components/apps/contacts/recently-contacted";
import FavouriteContacts from "../../../../components/apps/contacts/favourite-contacts";
import ContactLabels from "../../../../components/apps/contacts/contact-labels";
import ExportContacts from "../../../../components/apps/contacts/export-contacts";
import { StyledSidebar, StyledContactList } from "./style";

const Wrapper: FC = () => {
    const { sidebar } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();
    const { width } = useWindowSize();

    useEffect(() => {
        if (width && width > 991.98) {
            dispatch(toggleSidebar({ isOpen: "open" }));
        }
    }, [width, dispatch]);

    return (
        <StyledSidebar $show={!sidebar}>
            <SidebarHeader />
            <TabWrap vertical>
                <TabList>
                    <Tab>
                        <Users />
                    </Tab>
                    <Tab>
                        <PhoneCall />
                    </Tab>
                    <Tab>
                        <Star />
                    </Tab>
                    <Tab>
                        <Tag />
                    </Tab>
                    <Tab>
                        <Upload />
                    </Tab>
                    <Anchor path="#!" className="react-tabs__tab" mt="10px">
                        <Settings />
                    </Anchor>
                </TabList>
                <TabContent>
                    <Scrollbar top="55px">
                        <TabPanel>
                            <StyledContactList>
                                <AllContacts />
                            </StyledContactList>
                        </TabPanel>
                        <TabPanel>
                            <StyledContactList>
                                <RecentlyContacted />
                            </StyledContactList>
                        </TabPanel>
                        <TabPanel>
                            <StyledContactList>
                                <FavouriteContacts />
                            </StyledContactList>
                        </TabPanel>
                        <TabPanel>
                            <StyledContactList>
                                <ContactLabels />
                            </StyledContactList>
                        </TabPanel>
                        <TabPanel>
                            <ExportContacts />
                        </TabPanel>
                    </Scrollbar>
                </TabContent>
            </TabWrap>
        </StyledSidebar>
    );
};

export default Wrapper;
