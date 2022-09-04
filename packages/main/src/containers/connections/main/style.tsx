import styled, { themeGet } from "@doar/shared/styled";
import { TabWrap } from "@doar/components";

export const StyledTabsWrap = styled(({ ...rest }) => <TabWrap {...rest} />)`
    .react-tabs {
        &__tab {
            .badge {
                background-color: ${themeGet("colors.light")};
                color: ${themeGet("colors.text3")};
            }
            &--selected {
                .badge {
                    background-color: ${themeGet("colors.info")};
                    color: #fff;
                }
            }
        }
    }
`;
