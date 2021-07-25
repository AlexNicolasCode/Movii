import styled from "styled-components"

import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { useFilter } from "../../contexts/filter"

const ItemPagination = styled.li`
    text-align: center;
    list-style: none;

    width: auto;
    padding: 10px;
`

const PaginationStyle = styled.ul`
    display: flex;
    flex: 1;
    justify-content: center;
    margin: auto;

    padding: 0;
`
const Button = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    font-weight: 700;

    width: 50px;
    height: 50px;
    color: #f2f2f2;
`

const CurrentPageButton = styled.button`
    background: #1fcbff;
    border: none;
    outline: none;
    cursor: none;

    font-weight: 700;

    width: 50px;
    height: 50px;
    color: #f2f2f2;
`

type PageProps = {
    page_id: string,
}

export function Pagination(props: PageProps) {
    const id: number  = parseFloat(props.page_id)
    const { setCurrentSlug } = useFilter()

    useEffect(() => {
        id === NaN ? console.log("no slug") : setCurrentSlug(id)
    }, [id])

    const router = useRouter()
    const sendToRoute = (route: string) => {
        router.push(route)
    }

    return (
        <PaginationStyle>
            {id > 1 ? (
                <Button onClick={() => sendToRoute(`/`)}>Home</Button>
            ) : (
                <Button disabled/>
            )}

            <CurrentPageButton disabled>
                <ItemPagination>
                    {`${id}`}
                </ItemPagination>
            </CurrentPageButton>
            <Button onClick={() => sendToRoute(`/${id + 1}`)}>
                <ItemPagination>
                    {`${id + 1}`}
                </ItemPagination>
            </Button>
            <Button onClick={() => sendToRoute(`/${id + 2}`)}>
                <ItemPagination>
                    {`${id + 2}`}
                </ItemPagination>
            </Button>
            <Button onClick={() => sendToRoute(`/${id + 3}`)}>
                <ItemPagination>
                    {`${id + 3}`}
                </ItemPagination>
            </Button>
            <Button onClick={() => sendToRoute(`/${id + 4}`)}>
                <ItemPagination>
                    {`${id + 4}`}
                </ItemPagination>
            </Button>
        </PaginationStyle>
    )
}