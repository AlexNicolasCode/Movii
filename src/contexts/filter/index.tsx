import { ReactNode, createContext, useState, Dispatch, useContext, useEffect } from "react";
import { api } from "../../services/api";

type FilterData = {
    selectFilter: (props: string) => Promise<void>,
    currentFiltersData: ElementFilted[],
    currentNamesFilters: string[],
    removeFilter: (props: string) => void,
    setCurrentFiltersData: Dispatch<ElementFilted[]>,
    currentIdsFilters: number[],
    currentSlug?: number,
    setCurrentSlug: Dispatch<number>,
};

const FilterContext = createContext({} as FilterData);

type FilterProviderProps = {
    children: ReactNode,
}

type ElementFilted = {
    id: number,
    name: string,
}

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

export function FilterProvider({ children }: FilterProviderProps) {
    const [ currentFiltersData, setCurrentFiltersData ] = useState<ElementFilted[]>([])
    const [ currentNamesFilters, setCurrentNamesFilters ] = useState<string[]>([])
    const [ currentIdsFilters, setCurrentIdsFilters ] = useState<number[]>([])
    const [ currentSlug, setCurrentSlug ] = useState<number>()

    useEffect(() => {
        const getProps = async () => {        
          const currentArraySorted: string[] = await currentFiltersData.map((filter: ElementFilted) => { return filter.name })
          setCurrentNamesFilters(currentArraySorted.sort())   
  
          const currentArraySortedIds: number[] = await currentFiltersData.map((filter: ElementFilted) => { return filter.id })
          setCurrentIdsFilters(currentArraySortedIds.sort())

          const filterInStorage: string = currentFiltersData.toString()

          sessionStorage.setItem('filters', filterInStorage);
        }

        getProps()
    }, [currentFiltersData])

    const removeFilter = (name: string) => {
        setCurrentFiltersData(currentFiltersData.filter((item: ElementFilted) => item.name !== name))
    }
    
    const selectFilter = async (newFilter: string) => {      
      const genresData = await api.get('genre/movie/list?api_key=c87d684e83e180236e81d0dae298e88c')
      const genres = genresData.data.genres

      const filterSelected = await genres.find((el: ElementFilted) => el.name === newFilter);
      const filterVerify = await currentFiltersData.find((el: ElementFilted) => el.name === newFilter);
      
      if (filterVerify === undefined) {
          const filterReplaced: ElementFilted[] = await [...currentFiltersData, filterSelected]
          
          const newFilterArray = await [...new Set(filterReplaced)]
          setCurrentFiltersData(newFilterArray)
        }
    }

    return (
        <FilterContext.Provider value={{
            selectFilter,
            currentFiltersData,
            setCurrentFiltersData,
            currentNamesFilters,
            currentIdsFilters,
            removeFilter,
            currentSlug,
            setCurrentSlug
        }}>
            { children }
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    return useContext(FilterContext);
}