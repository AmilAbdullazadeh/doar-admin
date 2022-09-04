import { FC } from "react";
import { Card, ListGroup, ListGroupItem, SectionTitle } from "@doar/components";
import { customers } from "@doar/shared/data/dashboard-one";
import Item from "./item";
import {
    StyledHeader,
    StyledHeaderRight,
    StyledIcon,
    StyledFooter,
    StyledFooterLink,
} from "./style";

const Customers: FC = () => {
    return (
        <Card height="100%">
            <StyledHeader>
                <SectionTitle title="New Customers" />
                <StyledHeaderRight>
                    <StyledIcon href="#" aria-label="refresh">
                        <i className="fa fa-redo" />
                    </StyledIcon>
                    <StyledIcon href="#" ml="10px" aria-label="more options">
                        <i className="fa fa-ellipsis-v" />
                    </StyledIcon>
                </StyledHeaderRight>
            </StyledHeader>
            <ListGroup flush>
                {customers.map((cst) => (
                    <ListGroupItem
                        key={cst.id}
                        display="flex"
                        px={[null, "20px"]}
                    >
                        <Item
                            id={cst.id}
                            name={cst.name}
                            image={cst.image}
                            bg={cst.bg}
                            chat_link={cst.chat_link}
                            profile_link={cst.profile_link}
                        />
                    </ListGroupItem>
                ))}
            </ListGroup>
            <StyledFooter>
                <StyledFooterLink href="/profile-view">
                    View More Customers{" "}
                    <i className="icon ion-md-arrow-down mg-l-5" />
                </StyledFooterLink>
            </StyledFooter>
        </Card>
    );
};

export default Customers;
