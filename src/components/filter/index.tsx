import { useFilter } from "../../contexts/filter"
import { FilterSelected } from "../styles/styles"

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