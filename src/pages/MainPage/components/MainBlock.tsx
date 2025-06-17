import { useState } from "react"
import { useOutletContext } from "react-router"
import WeatherBlockUncorrect from "./WeatherBlockUncorrect"
import type { DataRequest, DataForm } from "../../../models/IDataModels"
import WeatherBlockCorrect from "./WeatherBlockCorrect"
import SearchInput from "./SearchInput"

export default function MainBlock() {
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
