import styled from "styled-components"
import { useFilter } from "../../../contexts/filter"

const FilterSelected = styled.li`
    display: inline-block;
    list-style: none;
    background: #f2f2f2;

    font-weight: 700;
    font-size: 8px;
    color: #020202;

    width: 10%;
    margin: 5px 8px;
    padding: 8px;
    border-radius: 5px;

    button {
        float: right;
        background: none;
        border: none;
        outline: none;
        font-size: 8px;
        margin-left: 5px;
    }

    @media (max-width: 768px) {
        width: 200px;
        height: 40px;
        font-size: 16px;

        button {
            font-size: 16px;
            margin: 4px;
        }
    }
`

type FilterProps = {
    name: string,
}

export function FilterModel(props: FilterProps) {
    const { removeFilter } = useFilter()

    return (
        <FilterSelected>
            <span>{props.name}</span>
            <button onClick={() => removeFilter(props.name)}>X</button>
        </FilterSelected>
    )
}