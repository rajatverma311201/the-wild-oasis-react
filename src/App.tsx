import { Button, Input, Heading } from "@/components";
import { Row, Column } from "@/components/layout";
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
    /* align-items: center; */
    /* justify-items: center; */
    padding: 2.5rem;
    gap: 2.5rem;

    & > * {
        border: 1px solid var(--color-grey-300);
        padding: 1rem;
    }
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

            <div>
                <Button>Check In</Button>
            </div>
            <div>
                <Input placeholder="Hello" />
            </div>
            <div>
                <Row>
                    <Button>Check In</Button>
                    <Button>Check In</Button>
                </Row>
            </div>
            <div>
                <Column align="center">
                    <Button>Check In</Button>
                    <Button>Check In</Button>
                </Column>
            </div>
        </StyledApp>
    );
}

export default App;
