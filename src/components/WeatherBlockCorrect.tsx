import type { DataForm, DataSucess } from "../models/IDataModels";
import ConditionItem from "./ConditionItem";

interface WeatherBlockCorrectProps {
    data: DataSucess,
    cityValue: string,
    dataForm: DataForm
}

export default function WeatherBlockCorrect({ data, cityValue, dataForm }: WeatherBlockCorrectProps) {
    let weatherType: string;
    console.log(dataForm)
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
                <p className="place-text">{cityValue.toUpperCase()}</p>
            </div>
            <div className="weather-data active temp">
                <div className="cont">
                    <div className="temp-block">
                        <i className={"weather-icon" + ' ' + weatherType}></i>
                        <h2 className="temperature">
                            {dataForm.temperature === '℃'
                                ? Math.round(data.main.temp) + '℃'
                                : Math.round((data.main.temp * 1.8) + 32) + '°F'
                            }
                        </h2>
                    </div>
                    <p className="weather-text">{data.weather[0].description.toUpperCase()}</p>
                </div>
                <div className="feels">
                    <h2 className="feel-temp">
                        {dataForm.temperature === '℃'
                            ? Math.round(data.main.feels_like) + '℃'
                            : Math.round((data.main.feels_like * 1.8) + 32) + '°F'
                        }
                    </h2>
                    <h3>Feels like</h3>
                </div>
            </div>
            <div className="weather-data active conditions">
                <ConditionItem
                    value={data.main.humidity}
                    form={dataForm}
                    conditionType='humidity'
                />
                <ConditionItem
                    value=
                    {dataForm.windSpeed === 'km/h'
                        ? data.wind.speed
                        : dataForm.windSpeed === 'm/s'
                            ? Math.round(data.wind.speed * 0.277778)
                            : Math.round(data.wind.speed * 0.6213711922)
                    }
                    form={dataForm}
                    conditionType='wind'
                />
                <ConditionItem
                    value=
                    {dataForm.pressure === 'mmHg.'
                        ? data.main.pressure
                        : Math.round((data.main.pressure * 133.32)/1000)
                    }
                    form={dataForm}
                    conditionType='pressure'
                />
            </div>
        </div>
    )
}
