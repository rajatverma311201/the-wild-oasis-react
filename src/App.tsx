import { Dashboard } from "@/pages";
import { Button, Input, Heading } from "@/components";
import styled from "styled-components";

const StyledApp = styled.div`
    width: 100%;
    min-height: 100%;
    background: linear-gradient(
        to right bottom,
        var(--color-brand-50),
        var(--color-brand-200)
    );
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    padding: 2.5rem;
    gap: 2.5rem;
`;

function App() {
    return (
        <StyledApp>
            <div>
                <Heading as="h1">H1 Hello World</Heading>
                <Heading as="h2">H2 Hello World</Heading>
                <Heading as="h3">H3 Hello World</Heading>
                <Heading as="h4">H4 Hello World</Heading>
            </div>

            <Button>Check In</Button>
            <Input placeholder="Hello" />
        </StyledApp>
    );
}

export default App;
