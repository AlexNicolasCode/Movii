import styled from 'styled-components';
import { useRouter } from 'next/router'

const MovieStyle = styled.li`
    display: grid;
    gap: 10px;

    background: none no-repeat;
    list-style: none;
    background-size: 222px 333.5px;
    width: 222px;
    height: 333.5px;

    filter: grayscale(90%);
    
    &:hover {
        filter: grayscale(0%);
        cursor: pointer;

        transition: 0.2s
    }
`

const ButtonStyle = styled.button`
    display: inline-block;
    background: none;
    border: none;
    outline: none;
`

type MovieProps = {
    id: string,
    rate?: string,
    date?: string,
    descrition?: string,
    image: string
}

export function Movie(props: MovieProps) {
    const router = useRouter();
    const goToMoviePage = (route: string) => {
        router.push(route)
    }

    return (
        <ButtonStyle onClick={() => goToMoviePage(`/movie/${props.id}`)}>
            <MovieStyle style={{backgroundImage: `url(${props.image})`}} />
        </ButtonStyle>
    )
}