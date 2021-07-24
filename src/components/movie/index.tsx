import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components';

const MovieStyle = styled.li`
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
        <button onClick={() => goToMoviePage(`/movie/${props.id}`)}>
            <MovieStyle style={{backgroundImage: `url(${props.image})`}} />
        </button>
    )
}