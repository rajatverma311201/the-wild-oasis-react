import styled from "styled-components";

const ALIGNMENTS = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    stretch: "stretch",
    baseline: "baseline",
};

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    ${(props: {
        align?: "start" | "end" | "center" | "stretch" | "baseline";
    }) => props.align && `align-items: ${ALIGNMENTS[props.align]};`}
`;

Column.defaultProps = {
    align: "start",
};

export default Column;
