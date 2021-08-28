import styled from 'styled-components';

export const Main = styled.main`
    margin: 8px 16px;

    section {
        margin-bottom: 16px;

        h2 {
            margin-bottom: 8px;
        }
    }

    @media (max-width: 768px) {
       margin: 0px;
    }
`

export const BackButton = styled.button`
    background: none;
    outline: none;
    border: 2px solid #f2f2f2;
    border-radius: 0 0 10 10px;
    color: #f2f2f2;

    height: 50px;
    width: 50px;
    margin-bottom: 16px;
    font-weight: 700;

    &:hover {
        background: #f2f2f2;
        color: #111111;
        transition: 0.2s;
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 80px;
        font-size: 16px;
    }
`
export const Apresentation = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-left: 8px;
    
    img {  
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;

        padding: 20px;
        height: 500px;

        &:hover {
            transform: scale(110%);
            transition: 0.2s;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Article = styled.article`
    width: 70%;
    margin-left: 16px;
    float: right;

    h1 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 8px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 16px;
        text-align: justify;
    }

    @media (max-width: 768px) {
        margin-left: 0px;
        width: 100%;
        margin-top: 16px;

        h1 {
            text-align: center;
            width: 100%;
        }
    }
`