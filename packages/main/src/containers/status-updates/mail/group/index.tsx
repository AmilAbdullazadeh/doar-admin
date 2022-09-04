import { FC } from "react";
import { Search } from "react-feather";
import { Heading, Text, Anchor, Button } from "@doar/components";
import ScrollBar from "../../../../components/scrollbar";
import SearchForm from "../../../../components/apps/mail/search-form";
import GroupItem from "../../../../components/apps/mail/group-item";
import { useAppDispatch } from "../../../../redux/hooks";
import { toggleBody } from "../../../../redux/slices/ui";
import {
    StyledGroup,
    StyledHeader,
    StyledBody,
    StyledTopDiv,
    StyledLabel,
    StyledList,
    StyledReadMore,
} from "./style";

const Group: FC = () => {
    const dispatch = useAppDispatch();
    const handleBody = () => {
        dispatch(toggleBody());
    };
    return (
        <StyledGroup>
            <StyledHeader>
                <Search className="search" />
                <SearchForm />
            </StyledHeader>
            <ScrollBar top="55px">
                <StyledBody>
                    <StyledTopDiv>
                        <Heading tt="uppercase" fontWeight={600} mb="0px">
                            Inbox
                        </Heading>
                        <Text color="text3" fontSize="12px">
                            Sort:
                            <Anchor path="#!" variant="link2">
                                Date
                            </Anchor>
                        </Text>
                    </StyledTopDiv>
                    <StyledLabel>Today</StyledLabel>
                    <StyledList>
                        <GroupItem
                            color="indigo"
                            name="Dyanne Aceron"
                            time="1:20pm"
                            title="Just asking questions"
                            excerpt="Aenean commodo ligula eget dolor. Ae nean massa. Cum sociis natoque "
                            status="unread"
                            onClick={handleBody}
                        />
                        <GroupItem
                            color="teal"
                            name="Reynante Labares"
                            time="11:40am"
                            title="30 Seconds Survey to Your Next Job"
                            excerpt="Aenean commodo ligula eget dolor. Ae nean massa. Cum sociis natoque "
                            onClick={handleBody}
                        />
                        <GroupItem
                            color="gray800"
                            name="Rolando Paloso"
                            time="10:54am"
                            title="Watch, Listen and Play Longer"
                            excerpt="Aenean commodo ligula eget dolor. Ae nean massa. Cum sociis natoque "
                            onClick={handleBody}
                        />
                        <GroupItem
                            color="pink"
                            name="Socrates Itumay"
                            time="09:50am"
                            title="Pre-Order Sale: Mastering CSS"
                            excerpt="Aenean commodo ligula eget dolor. Ae nean massa. Cum sociis natoque"
                            onClick={handleBody}
                        />
                    </StyledList>
                    <StyledLabel>Yesterday</StyledLabel>
                    <StyledList>
                        <GroupItem
                            color="primary"
                            name="Yassi Pressman"
                            time="8:20pm"
                            title="Envato Contributor Payment"
                            excerpt="Commodo ligula eget dolor. Aenean massa cum sociis natoqu "
                            onClick={handleBody}
                        />
                        <GroupItem
                            color="teal"
                            name="Isidore Dilao"
                            time="06:42pm"
                            title="America's Best Dance Cruise"
                            excerpt="Aenean commodo ligula eget dolor. Ae nean massa. Cum sociis natoque "
                            onClick={handleBody}
                        />
                    </StyledList>
                    <StyledLabel>January 20</StyledLabel>
                    <StyledList>
                        <GroupItem
                            color="secondary"
                            name="Dexter Dela Cruz"
                            time="4:18pm"
                            title="A Flaming Pile of Garbage"
                            excerpt="Commodo ligula eget dolor. Aenean massa cum sociis natoqu "
                            onClick={handleBody}
                        />
                        <GroupItem
                            color="primary"
                            name="Adrian Monino"
                            time="06:42pm"
                            title="Watch, Listen and Play Longer"
                            excerpt="Aenean commodo ligula eget dolor. Ae nean massa. Cum sociis natoque "
                            onClick={handleBody}
                        />
                    </StyledList>
                    <StyledLabel>January 18</StyledLabel>
                    <StyledList>
                        <GroupItem
                            color="secondary"
                            name="Annie Christensen"
                            time="7:26pm"
                            title="Just asking questions"
                            excerpt="Commodo ligula eget dolor. Aenean massa cum sociis natoqu "
                            onClick={handleBody}
                        />
                        <GroupItem
                            color="primary"
                            name="Adrian Monino"
                            time="06:42pm"
                            title="Watch, Listen and Play Longer"
                            excerpt="Aenean commodo ligula eget dolor. Ae nean massa. Cum sociis natoque "
                            onClick={handleBody}
                        />
                        <GroupItem
                            color="gray700"
                            name="Robert Restificar"
                            time="12:01pm"
                            title="Envato Contributor Payment"
                            excerpt="Commodo ligula eget dolor. Aenean massa cum sociis natoqu"
                            onClick={handleBody}
                        />
                        <GroupItem
                            color="purple"
                            name="Raymart Serencio"
                            time="11:13am"
                            title="Sale: Javascript Beginners"
                            excerpt="Aenean commodo ligula eget dolor. Ae nean massa. Cum sociis natoque"
                            onClick={handleBody}
                        />
                    </StyledList>
                    <StyledReadMore>
                        <Button size="xs" color="light" fullwidth>
                            Load more
                        </Button>
                    </StyledReadMore>
                </StyledBody>
            </ScrollBar>
        </StyledGroup>
    );
};

export default Group;
