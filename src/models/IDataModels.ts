export type DataRequest = DataSucess | DataFail
export type WeatherTypes = 'Rain' | 'Clouds' | 'Clear' | 'Snow' | 'Thunderstorm'

export interface Weather {
    main: WeatherTypes,
    id: number,
    description: string,
    icon: string
}

export interface Wind {
    speed: number,
    deg: number,
    gust: number
}


export interface ObjectShape<T> {
    [key: string]: T
}

export interface DataMain {
    humidity: number,
    feels_like: number,
    pressure: number,
    temp: number,
    sea_level: number
}

export interface DataSucess {
    cod: 200,
    clouds: ObjectShape<number>,
    coord: ObjectShape<number>,
    id: number,
    main: DataMain,
    wind: Wind,
    weather: Weather[],
    name: string
}

export interface DataFail {
    cod: '400',
    message: string
}