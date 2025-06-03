
import { useState } from "react"
import SearchInput from "./components/SearchInput"
import './styles/App.css'
import WeatherBlockCorrect from "./components/WeatherBlockCorrect"
import WeatherBlockUncorrect from "./components/WeatherBlockUncorrect"
import type { DataRequest } from "./models/IDataModels"

function App() {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [data, setData] = useState<DataRequest | false>(false)

    return (
        <>
            <SearchInput
                setData={setData}
                setIsActive={setIsActive}
                setIsCorrect={setIsCorrect}
            />
            {isActive
                ? isCorrect && data !== false && 'main' in data
                    ? <WeatherBlockCorrect data={data} />
                    : <WeatherBlockUncorrect />
                : <div style={{ height: '60px' }}></div>

            }
        </>
    )
}

export default App
