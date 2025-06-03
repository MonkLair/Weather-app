import type { DataSucess } from "../models/IDataModels";
import ConditionItem from "./ConditionItem";

interface WeatherBlockCorrectProps {
    data: DataSucess,
}

export default function WeatherBlockCorrect({ data }: WeatherBlockCorrectProps) {
    let weatherType: string;

    switch (data.weather[0].main) {
        case 'Rain':
            weatherType = 'rain'
            break
        case 'Clouds':
            weatherType = 'clouds'
            break
        case 'Clear':
            weatherType = 'clear'
            break
        case 'Snow':
            weatherType = 'snow'
            break
        case 'Thunderstorm':
            weatherType = 'thunder'
            break
    }

    return (
        <div className="weather-block active">
            <div className="weather-data active place">
                <p className="place-text">{data.name.split(' ')[0].toUpperCase()}</p>
            </div>
            <div className="weather-data active temp">
                <div className="cont">
                    <div className="temp-block">
                        <i className={"weather-icon" + ' ' + weatherType}></i>
                        <h2 className="temperature">{Math.round(data.main.temp)}℃</h2>
                    </div>
                    <p className="weather-text">{data.weather[0].description.toUpperCase()}</p>
                </div>
                <div className="feels">
                    <h2 className="feel-temp">{Math.round(data.main.feels_like)}℃</h2>
                    <h3>Feels like</h3>
                </div>
            </div>
            <div className="weather-data active conditions">
                <ConditionItem value={data.main.humidity} conditionType='humidity' />
                <ConditionItem value={data.wind.speed} conditionType='wind' />
                <ConditionItem value={data.main.pressure} conditionType='pressure' />
            </div>
        </div>
    )
}
