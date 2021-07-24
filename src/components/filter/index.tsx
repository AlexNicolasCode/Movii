import styled from "styled-components"
import { useFilter } from "../../contexts/filter"

const FilterSelected = styled.li`
    background: #f2f2f2;
    color: #020202;
    padding: 10px;
    border-radius: 10px;
`

type FilterProps = {
    name: string,
    key: number,
}

export function FilterModel(props: FilterProps) {
    const { removeFilter } = useFilter()

    return (
        <FilterSelected key={props.key}>
            {props.name}
            <button onClick={() => removeFilter(props.name)}>X</button>
        </FilterSelected>
    )
}