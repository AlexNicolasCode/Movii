import styled from "styled-components"

import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { useFilter } from "../../../contexts/filter"

const PaginationStyle = styled.ul`
    display: flex;
    flex: 1;
    justify-content: center;

    li {
        border: none;
        outline: none;
        cursor: pointer;

        text-align: center;
        list-style: none;

        width: auto;
        padding: 10px;
        margin: 8px;

        width: 50px;
        height: 50px;
        color: #f2f2f2;
        font-size: 16px
    }
`

const PageSender = styled.li`
    background: none;
    `

const PageSenderToHome = styled.li`
    background: none;
`

const CurrentPageSender = styled.li`
    background: #1fcbff;
    font-weight: 700;
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
                <PageSenderToHome onClick={() => sendToRoute(`/`)}>Home</PageSenderToHome>
            ) : (
                <div />
            )}

            <CurrentPageSender disabled>
                    {`${id}`}
            </CurrentPageSender>

            <PageSender onClick={() => sendToRoute(`/${id + 1}`)}>
                    {`${id + 1}`}
            </PageSender>

            <PageSender onClick={() => sendToRoute(`/${id + 2}`)}>
                    {`${id + 2}`}
            </PageSender>

            <PageSender onClick={() => sendToRoute(`/${id + 3}`)}>
                    {`${id + 3}`}
            </PageSender>

            <PageSender onClick={() => sendToRoute(`/${id + 4}`)}>
                    {`${id + 4}`}
            </PageSender>
        </PaginationStyle>
    )
}