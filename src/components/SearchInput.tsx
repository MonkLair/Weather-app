import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/App.css'
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { requestAPI } from '../api/WeatherRequest'
import type { DataRequest } from '../models/IDataModels'

interface SearchInputProps {
    setIsActive: (state: boolean) => void,
    setCityValue: (state: string) => void,
    setData: (state: DataRequest | false) => void
}

export default function SearchInput({ setIsActive, setCityValue, setData }: SearchInputProps) {
    const [searchRequest, setSearchRequest] = useState<string>('')


    async function handleClick(e: React.MouseEvent | React.KeyboardEvent) {

        if ('button' in e || e.code == 'Enter') {
            setCityValue(searchRequest)
            const currData = await requestAPI(searchRequest.trim())
            console.log(currData)
            if (currData !== false) {
                setData(currData)
            }
            setIsActive(true)
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const curr = e.target.value
        if (curr !== searchRequest)
            setSearchRequest(curr)
    }

    return (
        <>
            <div className="search-box">
                <FontAwesomeIcon icon={faLocationDot} />
                <input value={searchRequest}
                    onChange={handleChange}
                    className="search-input"
                    type="text"
                    placeholder="Enter your location"
                    onKeyDown={handleClick}
                />
                <button onClick={handleClick} className="search-button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </>
    )
}
