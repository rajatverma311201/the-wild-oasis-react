import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "@/services/apiCabins";
import { Spinner } from "@/components/ui";
import { Cabin } from "@/types";
import { Button } from "@/components";
import { CreateCabinForm, CabinRow } from ".";
import { Column } from "@/components/layout";

const Table = styled.div`
    border: 1px solid var(--color-grey-200);

    font-size: 1.4rem;
    background-color: var(--color-grey-0);
    border-radius: 7px;
    overflow: hidden;
`;

const TableHeader = styled.header`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;

    background-color: var(--color-grey-50);
    border-bottom: 1px solid var(--color-grey-100);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 1.6rem 2.4rem;
`;

function CabinTable() {
    const [showForm, setShowForm] = useState<boolean>(false);
    const {
        isLoading,
        data: cabins,
    }: { isLoading: boolean; data: Array<Cabin> | undefined } = useQuery({
        queryKey: ["cabins"],
        queryFn: getCabins,
    });

    if (isLoading) return <Spinner />;

    return (
        <>
            <Table role="table">
                <TableHeader role="row">
                    <div></div>
                    <div>Cabin</div>
                    <div>Capacity</div>
                    <div>Price</div>
                    <div>Discount</div>
                    <div></div>
                </TableHeader>
                {cabins?.map((cabin: Cabin) => (
                    <CabinRow cabin={cabin} key={cabin.id} />
                ))}
            </Table>
            <Column align="stretch">
                <Button onClick={() => setShowForm((show) => !show)}>
                    Add Cabin
                </Button>
            </Column>
            {showForm && <CreateCabinForm />}
        </>
    );
}

export default CabinTable;
