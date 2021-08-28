import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 40px;
    width: 100%;
    padding: 10px;
    margin-left: 8px;


    @media (max-width: 768px) {
        margin-top: 56px;
        margin-left: 0px;
        text-align: center;
    }
`

export const OptionsCategories = styled.button`
    color: #c1c1c1;
    font-size: 16px;
    font-weight: 700;
    width: 125px;
    height: 40px;
    border: none;
    outline: none;
    background: #f2f2f2;

    &:hover {
        color: #020202;

        transition: 0.2s;
    }

    @media (max-width: 768px) {
        height: 80px;
    }

`

export const AllCategories = styled.section`
    float: right;
    position: absolute;
    z-index: 1;
    display: grid;
    gap: 1px;
    right: 0;
    top: 0;
`

export const AllMoviesStyle = styled.ul`
    width: 90%;
    margin: auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const FiltersList = styled.ul`
    display: inline-block;
    width: 80%;

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        padding: 0;
        flex-direction: column;
    }
`

export const Footer = styled.footer`
    text-align: center;
    margin-top: 16px;
` 