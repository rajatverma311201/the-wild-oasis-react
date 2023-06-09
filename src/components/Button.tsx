import styled from "styled-components";

const Button = styled.button`
    font-size: 1.5rem;
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
    padding: 1rem 2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    box-shadow: var(--shadow-sm);
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-brand-700);
    }
`;

export default Button;
