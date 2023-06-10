import { useState } from "react";
import { Button, Heading } from "@/components";
import { Column, Row } from "@/components/layout";
import { CabinTable, CreateCabinForm } from "@/features/cabins";

function Cabins() {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <>
            <Row>
                <Heading as="h1">All cabins</Heading>
                <p>Filter/Sort</p>
            </Row>
            <Column>
                <CabinTable />
                <Column align="stretch">
                    <Button onClick={() => setShowForm((show) => !show)}>
                        Add Cabin
                    </Button>
                </Column>
            </Column>
            {showForm && <CreateCabinForm />}
        </>
    );
}

export default Cabins;
