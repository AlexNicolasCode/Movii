import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { MovieStyle } from '../styles/styles'

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