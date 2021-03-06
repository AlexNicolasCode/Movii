import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import { api } from "../../src/services/api"
import { Movie } from '../../src/components/Anothers/MovieComponent'
import { useFilter } from '../../src/contexts/filter'
import { useRouter } from 'next/dist/client/router'
import { AllMoviesStyle } from '../../src/components/Anothers'
import { Apresentation, Main, Article, BackButton } from '../../src/components/MoviePage' 

type MovieData = {
    movie: {
        id: number,
        title: string,
        vote_average: string,
        poster_path: string,
        backdrop_path: string,
        overview: string
    },
    similarMovies: SimilarMovieData[];
}

type SimilarMovieData = {
    id: string,
    title: string,
    poster_path: string
}

type Slug = {
    id: number
}

export default function MoviePage({ movie, similarMovies }: MovieData) {
    const { currentSlug } = useFilter();
    const BASE_URL = "https://image.tmdb.org/t/p/w500";

    const router = useRouter();
    const backToHomepage = (route: string) => {
        route === undefined ? router.push('/') : router.push(route)
    }

    return (
        <div style={{ backgroundImage: `url(${BASE_URL}/${movie.backdrop_path}) no-repeat fixed` }}>
            <Head>
                <title>{movie.title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet"></link>
            </Head>

            <Main>
                <aside>
                    <BackButton onClick={() => backToHomepage(`/${currentSlug}`)}>
                        Voltar
                    </BackButton>
                </aside>

                <Apresentation>
                    <Image 
                        src={`${BASE_URL}/${movie.poster_path}`} 
                        alt={movie.title} 
                        width={222} 
                        height={333.5}
                    />

                    <Article>
                        <h1>{movie.title} - {movie.vote_average}</h1>
                        <h2>Sinopse</h2>
                        <p>{movie.overview}</p> 
                    </Article>
                </Apresentation>

                <section>
                    <h2>Another Movies</h2>
                    <AllMoviesStyle>
                        {similarMovies.map((movie) => {
                            return (
                                <Movie key={movie.id} id={movie.id} image={`${BASE_URL}/${movie.poster_path}`} />
                            )
                        })}
                    </AllMoviesStyle>
                </section>
            </Main>
        </div>
    )
}

export const getStaticPaths = async () => { 
    const { data } = await api.get('movie/popular?api_key=c87d684e83e180236e81d0dae298e88c')

    const movies = data.results

    const paths = movies.map((item: Slug) => {
        const id = item.id.toString()

        return {
            params: {
                slug: id
            },
        }
    })
    
    return { 
        paths,
        fallback: 'blocking'
    }
}

type ctxType = {
    params: { 
        slug: string
    }
}
    
export const getStaticProps = async (ctx: ctxType) => {
    const { slug } = ctx.params;

    const { data } = await api.get(`movie/${slug}?api_key=c87d684e83e180236e81d0dae298e88c`);
    const movie = data;

    const dataSimilarMovies = await api.get(`movie/${slug}/similar?api_key=c87d684e83e180236e81d0dae298e88c`);
    const similarMovies = await dataSimilarMovies.data.results;

    return {
        props: {
          movie,
          similarMovies
        },
    }
}
