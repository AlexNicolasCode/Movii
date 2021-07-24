import { useFilter } from '../../../contexts/filter'
import { ButtonGender } from '../../styles/styles'

type GenderProps = {
    id: number,
    name: string
} 

export function Gender(props: GenderProps) {
    const { selectFilter } = useFilter();

    return (
        <ButtonGender onClick={() => selectFilter(props.name)}>
            {props.name}
        </ButtonGender>
    )
}