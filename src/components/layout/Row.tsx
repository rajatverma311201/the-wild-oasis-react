import styled from "styled-components";

const ALIGNMENTS = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    even: "space-evenly",
};

const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;

    ${(props: {
        justify?: "start" | "end" | "center" | "between" | "around" | "even";
    }) =>
        props.justify
            ? `justify-content: ${ALIGNMENTS[props.justify]};`
            : `justify-content: center;`}
`;

export default Row;
