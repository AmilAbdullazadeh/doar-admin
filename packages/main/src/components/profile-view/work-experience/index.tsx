import { FC } from "react";
import { Plus, ChevronDown, Briefcase } from "react-feather";
import {
    Card,
    CardBody,
    Heading,
    Text,
    Media,
    MediaBody,
    Nav,
    NavLink,
} from "@doar/components";
import Header from "../header";
import Footer from "../footer";
import { StyledTime, StyledIcon, StyledName, StyledList } from "./style";

const WorkExperience: FC = () => {
    return (
        <Card mb={["20px", null, null, "25px"]}>
            <Header>
                <Heading tt="uppercase" fontWeight="600" mb="0px">
                    Work Experience
                </Heading>
                <Nav customStyle="with-icon">
                    <NavLink path="#!">
                        <Plus />
                        Add New
                    </NavLink>
                </Nav>
            </Header>
            <CardBody p={["25px", "25px"]}>
                <Media display={["block", "flex"]}>
                    <StyledIcon>
                        <Briefcase width={40} height={40} />
                    </StyledIcon>
                    <MediaBody ml={[null, "25px"]} mt={["25px", 0]}>
                        <Heading as="h5" mb="5px">
                            Area Sales Manager
                        </Heading>
                        <Text color="text2" mb="3px">
                            <StyledName>Company, Inc.</StyledName>, Bay Area,
                            San Francisco, CA
                        </Text>
                        <StyledTime>December 2016 - Present</StyledTime>
                        <StyledList>
                            <li>
                                Reaching the targets and goals set for my area.
                            </li>
                            <li>
                                Servicing the needs of my existing customers.
                            </li>
                            <li>
                                Maintaining the relationships with existing
                                customers for repeat business.
                            </li>
                            <li>Reporting to top managers.</li>
                            <li>Keeping up to date with the products.</li>
                        </StyledList>
                    </MediaBody>
                </Media>
            </CardBody>
            <Footer>
                <Nav customStyle="with-icon">
                    <NavLink path="#!" iconPosition="right" iconDistance="2px">
                        Show More Experiences (4)
                        <ChevronDown />
                    </NavLink>
                </Nav>
            </Footer>
        </Card>
    );
};

export default WorkExperience;
