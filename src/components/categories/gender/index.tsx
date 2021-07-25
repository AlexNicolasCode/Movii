import styled from 'styled-components';
import { useFilter } from '../../../contexts/filter'

const ButtonGender = styled.button`
    text-align: center;
    font-size: 16px;
    background-color: #020202;
    color: #f2f2f2;
    
    width: 125px;
    height: 20px;

    outline: none;
    border: none;

    &:hover {
        color: #020202;
        background: #f2f2f2;
        font-weight: 700;

        transition: 0.2s;
    }
`

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