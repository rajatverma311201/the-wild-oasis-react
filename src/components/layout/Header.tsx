import styled from "styled-components";
import { Heading } from "@/components";

const StyledHeader = styled.header`
    background-color: skyblue;
    background-color: var(--color-grey-0);
    border-bottom: 1px solid var(--color-grey-100);
    padding: 1.5rem 1rem;
`;

function Header() {
    return (
        <StyledHeader>
            <Heading as="h4">Header</Heading>
        </StyledHeader>
    );
}

export default Header;
