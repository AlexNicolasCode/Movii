import Link from "next/link"
import { useEffect } from "react"
import styled from "styled-components"
import { useFilter } from "../../contexts/filter"


const ItemPagination = styled.li`
    padding: 10px;
`

type PageProps = {
    page_id: string,
}

export function Pagination(props: PageProps) {
    const id: number = parseFloat(props.page_id)

    const { setCurrentFiltersData } = useFilter()

    useEffect(() => {
        setCurrentFiltersData([])
    }, [id])

    return (
        <ul>
            {id > 1 ? (
                <Link href={`/1`}>Voltar</Link>
            ) : (
                <Link href={`/1`}>Ok</Link>
            )}

            <Link href={`/${id}`}>
                <ItemPagination>
                    {`${id}`}
                </ItemPagination>
            </Link>
            <Link href={`/${id + 1}`}>
                <ItemPagination>
                    {`${id + 1}`}
                </ItemPagination>
            </Link>
            <Link href={`/${id + 2}`}>
                <ItemPagination>
                    {`${id + 2}`}
                </ItemPagination>
            </Link>
            <Link href={`/${id + 3}`}>
                <ItemPagination>
                    {`${id + 3}`}
                </ItemPagination>
            </Link>
            <Link href={`/${id + 4}`}>
                <ItemPagination>
                    {`${id + 4}`}
                </ItemPagination>
            </Link>
        </ul>
    )
}