import styled from 'styled-components';

export const Container = styled.div`
    width: 40vw;
    height: 550px;
    background-color: #D1D1D1;
    box-shadow: -0.5px 2px 6px rgba(0,0,0,0.2);

    position: relative;

    margin-bottom: 2rem;

    svg {
        scroll-behavior: inherit;
        
        /* Posição do mapa dentro do container */
        path, text {
            transform: translateX(480px) translateY(-160px);
        }
    }

    /* svg {
        display: inline-block;
        vertical-align: middle;
        max-height: 800px;

        border: 1px solid red;
        position: absolute;
        top: -50px;
        left: 200px;     
    } */
`;