import { Dashboard } from "@/pages";
import { Button, Input } from "@/components";
import styled from "styled-components";

const StyledApp = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(
        to right bottom,
        var(--color-brand-50),
        var(--color-brand-200)
    );
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
`;

function App() {
    return (
        <StyledApp>
            <h1>HELLO I AM APP</h1>
            <Dashboard />

            <Button>Check In</Button>
            <Input placeholder="Hello" />
        </StyledApp>
    );
}

export default App;
