import { ReactNode, createContext, useState, Dispatch, useContext } from "react";
import { api } from "../../services/api";

type FilterData = {
    selectFilter: (props: string) => Promise<void>,
    currentFiltersData: string[],
    removeFilter: (props: number) => void
};

const FilterContext = createContext({} as FilterData);

type FilterProviderProps = {
    children: ReactNode,
}

type ElementFilted = {
    id: number,
    name: string  
}

export function FilterProvider({ children }: FilterProviderProps) {
    const [ currentFiltersData, setCurrentFiltersData ] = useState([])

    const removeFilter = (index: number) => {
        currentFiltersData.splice(index, 1)
    }
    
    const selectFilter = async (newFilter: string) => {        
        const genresData = await api.get('genre/movie/list?api_key=c87d684e83e180236e81d0dae298e88c')
        const genres = genresData.data.genres

        const filterSelected = await genres.find((el: ElementFilted) => el.name === newFilter);
        const filterVerify = await currentFiltersData.find((el: ElementFilted) => el.name === newFilter);
        
        if (filterVerify === undefined) {
            const filterReplaced = await [...currentFiltersData, filterSelected]
            setCurrentFiltersData([...new Set(filterReplaced)] )
        }
    }

    return (
        <FilterContext.Provider value={{
            selectFilter,
            currentFiltersData,
            removeFilter,
        }}>
            { children }
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    return useContext(FilterContext);
}