import styled from 'styled-components';

export const Content = styled.div`

margin-top: 20px;


span{
    display: flex;
    flex-direction: row;
    justify-content:left;
    margin:10px 0;
    h3{
        background: var(--blue);
        color:white;
        padding: 15px;
        width: 75%;
        height: 3rem;
    }

    button{
        background: var(--red);
        border: 0;
        border-radius: 10px;
        color:white;
        font-size: 2rem;
        font-weight: 700;
        height: 3rem;
        margin-left: 10px;
        width: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.7);
        }
    }
}
`;