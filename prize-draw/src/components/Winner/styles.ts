import styled from 'styled-components';

export const Content = styled.div`
    width: 65%;

    h1 {
    color: var(--blue);
    font-size: 2.5rem;
    width: 400px;
    background-color: var(--yellow);
    max-height: 100px;
    text-align: center;
    margin-left: 200px;
    border-radius: 0 0 15px 15px;
    display:flex;
    justify-content: center;
    align-items : center;
    flex: 0.5;
    padding: 20px;
    }

    div{
        background: rgba(255,255,255,0.8);
        color: var(--blue);
        font-weight: bold;
        font-size:6rem;
        text-transform:uppercase;
        text-align: center;
        margin-top: 30%;
        padding:20px 0;
    }
`;

interface propsDivActive {
    active: boolean;
}
export const ContentDiv = styled.div<propsDivActive>`
        background: rgba(255,255,255,0.8);
        color: var(--blue);
        font-weight: bold;
        font-size:6rem;
        text-transform:uppercase;
        text-align: center;
        margin-top: 30%;
        padding:20px 0;
        display: ${(props) => props.active ? 'block' : ' none'};
`;
