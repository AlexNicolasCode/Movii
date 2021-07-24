import styled from 'styled-components';
import { useFilter } from '../../../contexts/filter'

const ButtonGender = styled.button`
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