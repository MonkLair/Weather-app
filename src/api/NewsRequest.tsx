import { NewsAPI } from "../consts/RequestAPI";
import type { INewsRequest } from "../models/INewsModels";


export async function requestNews(): Promise<INewsRequest> {
    const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/shared/7.json?api-key=${NewsAPI}`)
    const data: INewsRequest = await response.json()
    console.log(data)
    return data
}