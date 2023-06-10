import styled from "styled-components";

import { Logo, MainNav } from "@/components/ui";

const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    grid-row: 1/-1;
    border-right: 1px solid var(--color-grey-100);
    padding: 3.25rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />
        </StyledSidebar>
    );
}

export default Sidebar;
