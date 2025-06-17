import type { DataRequest } from "../../../models/IDataModels"
import { API } from "../consts/WeatherAPI"


function cachedRequestAPI(func: (city: string) => Promise<DataRequest>): (city: string) =>  Promise<DataRequest | false> {
    let previousCity = ''
    return async function (city: string) {
        if (previousCity === city) {
            return false
        }
        previousCity = city
        return func(city)
    }
}


async function baseRequestAPI (city: string): Promise<DataRequest> {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`)
        const data: DataRequest = await response.json()
        return data
}

export const requestAPI = cachedRequestAPI(baseRequestAPI)