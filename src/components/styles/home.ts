import styled from 'styled-components'

export const Category = styled.h1`
    font-size: 1.5rem;

    padding: 1rem;
    margin-left: 8px;
`

export const OptionsCategories = styled.button`
    color: #c1c1c1;
    font-size: 1rem;
    text-align: center;
    float: right;
    font-weight: 700;
    
    padding: 1rem;
    border: none;
    outline: none;
    background: #f2f2f2;

    &:hover {
        color: #020202;

        transition: 0.2s;
    }
`

export const AllCategories = styled.section`
    float: right;
    z-index: 200;

    margin-top: 10px;
    width: 15%;
    height: auto;
`

export const AllMoviesStyle = styled.ul`
    width: 90%;
    padding: 0;
    margin: auto;
`

export const FiltersList = styled.ul`
    display: inline-block;
    width: 80%;
`