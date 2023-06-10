import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: skyblue;
    background-color: var(--color-grey-0);
    border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
    return <StyledHeader>Header</StyledHeader>;
}

export default Header;
