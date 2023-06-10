/* MODULE IMPORTS */
import styled from "styled-components";

/* COMPONENT IMPORTS */
import { Button, Heading } from "@/components";
import { Row, Column, Center } from "@/components/layout";
import { Input } from "@/components/form";

/* App STYLES */
const StyledApp = styled.div`
    width: 100%;
    min-height: 100%;
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    padding: 2.5rem;
    gap: 2.5rem;

    & > * {
        border-radius: 5px;
        box-shadow: var(--shadow-md);
        padding: 1rem;
        background: linear-gradient(
            to right bottom,
            var(--color-brand-50),
            var(--color-brand-200)
        );
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
                <Center>
                    <Button>Check In</Button>
                </Center>
            </div>
            <div>
                <Center>
                    <Input placeholder="Hello" />
                </Center>
            </div>
            <div>
                <Row justify="even">
                    <Button size="large">Check In</Button>
                    <Button variant="secondary">Check In</Button>
                </Row>
            </div>
            <div>
                <Center>
                    <Column align="center">
                        <Button size="small">Check In</Button>
                        <Button>Check In</Button>
                        <Button size="large">Check In</Button>
                    </Column>
                </Center>
            </div>
            <div>
                <Center>
                    <Column align="center">
                        <Button>Check In</Button>
                        <Button variant="secondary">Check In</Button>
                        <Button variant="danger">Check In</Button>
                    </Column>
                </Center>
            </div>
        </StyledApp>
    );
}

export default App;
