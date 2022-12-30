import Head from "next/head"
import Router, { useRouter } from "next/router"
import { useEffect, useReducer } from "react"

export default function Error () {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])

    return (
        <>
            <Head>
                <title>404 - Ошибка</title>
            </Head>
            <h1>404 - Not Found</h1>
        </>
    )
}