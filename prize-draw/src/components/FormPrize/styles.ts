import styled from 'styled-components';

export const Content = styled.div`
    text-align: center;

    input[type="text"]{
        border:0;
        border-radius: 10px;
        font-size: 1.5rem;
        height: 3rem;
        padding: 15px;
        outline: none;
    }

    form {
        margin-top: 20px;
        button{
            background: var(--blue);
            border:0;
            border-radius: 10px;
            color:white;
            font-size: 1.5rem;
            font-weight: bold;
            height: 3rem;
            width: 3rem;
            margin-left: 10px;

            &:hover{
                filter: brightness(2);
;
            }
        }
    }

    .bt-sortear{
        background: var(--yellow);
        border:0;
        border-radius: 10px;
        color: var(--blue);
        font-size: 2rem;
        font-weight: 700;
        margin-top: 26px;
        padding: 12px;
        &:hover{
            filter: brightness(0.9);
        }
    }
`;