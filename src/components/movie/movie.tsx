import Link from 'next/link'
import { MovieStyle } from '../styles/styles'
import styles from '../movie/style.module.scss'

type MovieProps = {
    id: string,
    rate?: string,
    date?: string,
    descrition?: string,
    image: string
} 

export function Movie(props: MovieProps) {
    return (
        <Link href={`/movie/${props.id}`}>
            <MovieStyle style={{backgroundImage: `url(${props.image})`}} />
        </Link>
    )
}