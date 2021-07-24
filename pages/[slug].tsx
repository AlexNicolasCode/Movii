import Head from 'next/head';
import Link from 'next/link';
import { Movie } from '../src/components/movie/movie'
import { api } from '../src/services/api'

import { useEffect, useState } from 'react';
import { Gender } from '../src/components/categories/gender'
import { useFilter } from '../src/contexts/filter';

import { FilterModel } from '../src/components/filter';
import { AllCategories, Category, OptionsCategories } from '../src/components/styles/styles'
import styles from '../styles/Home.module.scss'
import { Pagination } from '../src/components/pagination';

type MovieData = {
  id: string,
  name: string,
  title: string,
  vote_average: string,
  poster_path: string,
  genre_ids: [
    genre: number[]
  ]
}

type Genres = {
  id: number,
  name: string,
}

type HomeProps = {
  allMovies: MovieData[],
  genres: Genres[],
  slug: string
}

export default function PaginationPage({ allMovies, genres, slug }: HomeProps) {
  const [ categories, setCategories ] = useState<boolean>(false)
  const [ filters, setFilters ] = useState<JSX.Element[]>([])
  const [ currentMovies, setCurrentMovies ] = useState<MovieData[]>([])
  const { currentFiltersData, currentSlug } = useFilter()

  useEffect(() => {
    const getAllMovies = async () => {
      currentFiltersData === undefined ? setCurrentMovies(allMovies) : getFiltersProps()
    }

    getAllMovies()
  }, [categories])
  
  useEffect(() => {
    showCurrentFilters()
  }, [currentFiltersData])

  useEffect(() => {
    showCurrentFilters()
  }, [currentSlug])

  const showCurrentFilters = () => {
    const getCurrentFilter = async () => {
      if (currentFiltersData.length > 0) {
        const categoriesFilters = await currentFiltersData.map((filter, index) => {
          return <FilterModel key={index} name={filter.name}/>
        })

        setFilters(categoriesFilters)
      }
    }

    getFiltersProps()
    getCurrentFilter()
  }

  const getFiltersProps = async () => {      
    if (currentFiltersData.length > 0) {
      const categoriesFiltedIds = await currentFiltersData.map((filter) => {
        return filter.id
      });
  
      const categoriesFilters = await currentFiltersData.map((filter, index) => {
        return <FilterModel key={index} name={filter.name}/>
      });

      const movieListFilted = await allMovies.filter(movie => {
        return movie.genre_ids.find(genre => { return genre == categoriesFiltedIds});
      })

      setFilters(categoriesFilters)
      setCurrentMovies(movieListFilted) 
    } else setCurrentMovies(allMovies)
  }

  const toggleCaregoriesButtonStatus = () => {
    categories === true ? setCategories(false) : setCategories(true)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>The Most Popular Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet"></link>
      </Head>

      <header>
        <section>
          {filters}
        </section>

        <section>
          <OptionsCategories onClick={toggleCaregoriesButtonStatus}>
            Categories
          </OptionsCategories>
          {categories &&
            <AllCategories>
              {genres.map((gender, index) => {
                return <Gender key={index} id={gender.id} name={gender.name} />
              })}
            </AllCategories>
          }
        </section>
      </header>

      <main className={styles.main}>
        <Category>The Most Popular Movies</Category>

        <section>
          {currentMovies.map((movie, index) => {
            return (
              <>
                <Movie key={index} id={movie.id} rate={movie.vote_average} image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              </>
            )
          })}
        </section>

        <section>
          <Pagination page_id={"1"}/>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Developed by Alex Nicolas</span>
      </footer>
    </div>
  )
}

export const getStaticPaths = async () => { 
  const { data } = await api.get('movie/popular?api_key=c87d684e83e180236e81d0dae298e88c')

  const movies = data.results

  const paths = movies.map((item) => {
      const id = toString(item.id)

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
  const { slug } = ctx.params
  const { data } = await api.get(`movie/popular?api_key=c87d684e83e180236e81d0dae298e88c&page=${slug}`)

  const genresData = await api.get('genre/movie/list?api_key=c87d684e83e180236e81d0dae298e88c');
  const genres = genresData.data.genres;
  
  const allMovies = data.results;

  return {
    props: {
        allMovies,
        genres,
        slug
      },
    }
}
