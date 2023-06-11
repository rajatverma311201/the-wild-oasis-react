import { useCabins } from "@/hooks/cabins";
import styled from "styled-components";
import { Spinner } from "@/components/ui";
import { Cabin } from "@/types";
import { CabinRow } from ".";
import { useSearchParams } from "react-router-dom";

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
    const { cabins, isLoading } = useCabins();
    const [searchParams] = useSearchParams();

    if (isLoading) return <Spinner />;

    // 1) FILTER
    const filterValue = searchParams.get("discount") || "all";

    let filteredCabins;
    if (filterValue === "all") filteredCabins = cabins;
    if (filterValue === "no-discount")
        filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
    if (filterValue === "with-discount")
        filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);

    // 2) SORT
    const sortBy = searchParams.get("sortBy") || "startDate-asc";
    const [field, direction] = sortBy.split("-");
    const modifier = direction === "asc" ? 1 : -1;
    const sortedCabins = filteredCabins?.sort(
        (a, b) => (a[field] - b[field]) * modifier
    );

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
                {sortedCabins?.map((cabin: Cabin) => (
                    <CabinRow cabin={cabin} key={cabin.id} />
                ))}
            </Table>
        </>
    );
}

export default CabinTable;
