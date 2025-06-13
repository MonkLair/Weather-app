import { useEffect, useState } from "react"
import { requestNews } from "../api/NewsRequest"
import type { INewsRequest } from "../models/INewsModels";
import News from "./News";

export default function NewsPage() {
    const [data, setData] = useState<INewsRequest>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchAPI = async () => {
            setData(await requestNews())
            setIsLoading(false)
        }
        fetchAPI()
    }, [])

    return (
        <>
            <div style={isLoading ? {justifyContent: 'center'} : {}} className="news-block">
                {isLoading
                    ? <div className="loading"></div>
                    : data?.results.map((newsInfo) => {
                        return <News key={newsInfo.id} newsInfo={newsInfo} />
                    })
                }
            </div>
        </>
    )
}
