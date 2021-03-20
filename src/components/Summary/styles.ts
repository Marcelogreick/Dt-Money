import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 colunas de tamanhos iguas flexivel.margin-top.......... repeat(3 veze isso 1fr)
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-titile);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block; // pq o strong é inline , fazer eele se comporta como se fosse uma div
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }
`