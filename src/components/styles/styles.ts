import styled from 'styled-components'

export const MovieStyle = styled.li`
    text-align: center;
    list-style: none;

    background-repeat: no-repeat;
    background-size: 222px 333.5px;
    width: 222px;
    height: 333.5px;
    
    padding: 2rem;
    margin: 20px 20px;
    filter: grayscale(90%);
    
    display: inline-block;
    item-align: center;
    justify-content: center;
    
    &:hover {
        filter: grayscale(0%);
        cursor: pointer;

        transition: 0.2s
    }
`

export const Category = styled.h2`
    font-size: 1.5rem;

    padding: 1rem;
    margin-bottom: 1rem;
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

export const ButtonGender = styled.button`
    text-align: center;
    font-size: 12px; 

    display: block;
    background-color: #020202;
    color: #f2f2f2;
    
    width: 100%;
    height: 20px;

    outline: none;
    border: none;
    margin: 0.5rem;

    &:hover {
        color: #020202;
        background: #c4c4c4;
        height: 40px;
        font-weight: 600;

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

export const FilterSelected = styled.span`
    background: #f2f2f2;
    color: #020202;
    padding: 1rem;
    border-routed: 2rem;
`