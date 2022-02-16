import styled from "styled-components";

export const Container = styled.div`

    font-weight: bold;
    background-color: #e9e9e9;
    width: 10vw;
    min-width: 10vw;
    height: 94vh;

    ul {
        margin-top: 2vh;

        li {
            padding: 1vh 0 1vh 3vh;
            

            list-style: none;
            transition: background-color .35s;

            &:hover {
                background-color: #ccc;
            };
            
            a {
                text-decoration: none;
                color: #333;    
            }

        }
    }

    
`;