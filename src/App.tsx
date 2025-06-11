
import { useState } from "react"
import SearchInput from "./components/SearchInput"
import './styles/App.css'
import WeatherBlockCorrect from "./components/WeatherBlockCorrect"
import WeatherBlockUncorrect from "./components/WeatherBlockUncorrect"
import type { DataRequest } from "./models/IDataModels"

function App() {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [cityValue, setCityValue] = useState<string>('')
    const [data, setData] = useState<DataRequest | false>(false)

    return (
        <>
            <SearchInput
                setData={setData}
                setIsActive={setIsActive}
                setCityValue={setCityValue}
            />
            {isActive
                ? data !== false && 'main' in data
                    ? <WeatherBlockCorrect cityValue={cityValue} data={data} />
                    : <WeatherBlockUncorrect />
                : <div style={{ height: '60px' }}></div>

            }
        </>
    )
}

export default App
