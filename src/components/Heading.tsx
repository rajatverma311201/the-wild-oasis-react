import styled, { css } from "styled-components";

const h1Styles = css`
    font-size: 3rem;
    font-weight: 600;
`;
const h2Styles = css`
    font-size: 2.25rem;
    font-weight: 600;
`;
const h3Styles = css`
    font-size: 2rem;
    font-weight: 500;
`;
const h4Styles = css`
    font-size: 1.75rem;
    font-weight: 500;
`;

const Heading = styled.h1`
    ${(props: { as: string }) => {
        switch (props.as) {
            case "h1":
                return h1Styles;
            case "h2":
                return h2Styles;
            case "h3":
                return h3Styles;
            case "h4":
                return h4Styles;
            default:
                return h1Styles;
        }
    }}
    line-height: 1.4;
`;

export default Heading;
