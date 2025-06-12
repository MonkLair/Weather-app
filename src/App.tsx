import { useState } from "react"
import SearchInput from "./components/SearchInput"
import './styles/App.css'
import WeatherBlockCorrect from "./components/WeatherBlockCorrect"
import WeatherBlockUncorrect from "./components/WeatherBlockUncorrect"
import type { DataForm, DataRequest } from "./models/IDataModels"
import { useOutletContext } from "react-router"


function App() {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [cityValue, setCityValue] = useState<string>('')
    const [data, setData] = useState<DataRequest | false>(false)
    const form = useOutletContext<DataForm>()

    return (
        <>
            <SearchInput
                setData={setData}
                setIsActive={setIsActive}
                setCityValue={setCityValue}
            />
            {isActive
                ? data !== false && 'main' in data
                    ? <WeatherBlockCorrect dataForm={form} cityValue={cityValue} data={data} />
                    : <WeatherBlockUncorrect />
                : <div style={{ height: '60px' }}></div>

            }
        </>
    )
}

export default App
