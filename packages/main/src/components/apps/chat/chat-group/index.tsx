import { FC } from "react";
import Divider from "./divider";
import Item from "./item";
import { StyledGroup } from "./style";

const ChatGroup: FC = () => {
    return (
        <StyledGroup>
            <Divider>February 20, 2019</Divider>
            <Item
                status="online"
                name="katherine"
                time="Today at 1:30am"
                content="<p>Hello everyone, this is my first message to this channel</p><p>anybody here?</p>"
            />
            <Divider>February 21, 2019</Divider>
            <Item
                status="online"
                name="katherine"
                time="Yesterday at 4:10am"
                content="<p>I'm back once again!!</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>"
            />
            <Item
                status="offline"
                name="situmay"
                time="Yesterday at 4:15am"
                content="<p>Excepteur sint occaecat cupidatat non proident</p><p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse...</p>"
            />
            <Divider>February 22, 2019</Divider>
            <Item
                status="online"
                bg="gray600"
                name="rlabares"
                time="Yesterday at 4:10am"
                content="<p>Nam libero tempore, cum soluta nobis</p>"
            />
            <Item
                status="offline"
                name="situmay"
                time="today at 4:15am"
                content="<p>I'm back once again!!</p><p>Et harum quidem rerum facilis est et expedita distinctio.</p><p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>"
            />
        </StyledGroup>
    );
};

export default ChatGroup;
