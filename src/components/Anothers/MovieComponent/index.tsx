import styled from 'styled-components';
import { useRouter } from 'next/router'

const MovieStyle = styled.li`
    display: inline-flex;
    background: none no-repeat;
    list-style: none;

    background-size: 222px 333.5px;
    width: 222px;
    height: 333.5px;

    margin: 0px 8px;
    filter: grayscale(90%);
    
    &:hover {
        filter: grayscale(0%);
        cursor: pointer;

        transition: 0.2s
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 100vh;
        background-size: 100% 100%;
        margin: 0;
    }
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
        <MovieStyle 
            style={{backgroundImage: `url(${props.image})`}}
            onClick={() => goToMoviePage(`/movie/${props.id}`)}
        />
    )
}