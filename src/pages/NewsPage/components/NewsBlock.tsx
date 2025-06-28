import { useEffect, useState } from "react"
import { requestNews } from "../api/NewsRequest"
import type { INewsRequest } from "../../../models/INewsModels";
import NewsItem from "./NewsItem";
import Loader from "../../../common/Loader";

export default function NewsBlock() {
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
            <div style={isLoading ? { justifyContent: 'center' } : {}} className="news-block">
                {isLoading
                    ? <Loader/>
                    : data?.results.map((newsInfo) => {
                        return <NewsItem key={newsInfo.id} newsInfo={newsInfo} />
                    })
                }
            </div>
        </>
    )
}
