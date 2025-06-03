import '../styles/App.css'

export default function WeatherBlockUncorrect() {
    return (
        <div className="weather-block active">
            <div className="not-found active">
            </div>
            <p className="not-found-text active">City not found</p>
        </div>
    )
}