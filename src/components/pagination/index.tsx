import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { useFilter } from "../../contexts/filter"

import styled from "styled-components"

const ItemPagination = styled.li`
    padding: 10px;
    width: 100%;
    height: 10px;

    text-align: center;
`

const PaginationStyle = styled.section`
    height: 10%;
    width: 50%;

    justify-content: center;
    text-align: center;
    margin: auto;
`

type PageProps = {
    page_id: string,
}

export function Pagination(props: PageProps) {
    const id: number = parseFloat(props.page_id)
    const { setCurrentSlug } = useFilter()

    useEffect(() => {
        id === NaN ? console.log("no slug") : setCurrentSlug(id)
    }, [id])

    const router = useRouter()
    const sendToRoute = (route: string) => {
        router.push(route)
    }

    return (
        <ul>
            {id > 1 ? (
                <button onClick={() => sendToRoute(`/1`)}>Voltar</button>
            ) : (
                <button onClick={() => sendToRoute(`/1`)}>Ok</button>
            )}

            <PaginationStyle>
                <button onClick={() => sendToRoute(`(/${id}`)}>
                    <ItemPagination>
                        {`${id}`}
                    </ItemPagination>
                </button>
                <button onClick={() => sendToRoute(`/${id + 1}`)}>
                    <ItemPagination>
                        {`${id + 1}`}
                    </ItemPagination>
                </button>
                <button onClick={() => sendToRoute(`/${id + 2}`)}>
                    <ItemPagination>
                        {`${id + 2}`}
                    </ItemPagination>
                </button>
                <button onClick={() => sendToRoute(`/${id + 3}`)}>
                    <ItemPagination>
                        {`${id + 3}`}
                    </ItemPagination>
                </button>
                <button onClick={() => sendToRoute(`/${id + 4}`)}>
                    <ItemPagination>
                        {`${id + 4}`}
                    </ItemPagination>
                </button>
            </PaginationStyle>
        </ul>
    )
}