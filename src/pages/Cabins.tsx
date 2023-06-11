import { Heading } from "@/components";
import { Column, Row } from "@/components/layout";
import { CabinTable, AddCabin } from "@/features/cabins";
function Cabins() {
    // const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <>
            <Row>
                <Heading as="h1">All cabins</Heading>
                <p>Filter/Sort</p>
            </Row>
            <Column>
                <CabinTable />

                <Column align="start">
                    <AddCabin />
                </Column>
            </Column>
        </>
    );
}

export default Cabins;
