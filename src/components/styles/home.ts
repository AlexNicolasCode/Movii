import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 40px;

    padding: 10px;
    margin-left: 8px;
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
    padding: 0;
    margin: auto;
`

export const FiltersList = styled.ul`
    display: inline-block;
    width: 80%;
`