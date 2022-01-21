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
    }

    button{
        background: var(--red);
        margin-left: 10px;
        width: 60px;
        color:white;
        font-weight: 700;
        font-size: 2rem;
        border: 0;
        border-radius: 10px;
    }
}
`;