import { faTemperatureThreeQuarters, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { DataForm } from "../models/IDataModels";

interface SettingsModalProps {
    setForm: (arg: DataForm) => void,
    form: DataForm
}

export default function SettingsModal({ setForm, form }: SettingsModalProps) {
    const speed = form.windSpeed
    const temp = form.temperature
    const pressure = form.pressure


    return (
        <>
            <div onClick={(e)=> e.stopPropagation()} className="settings-modal">
                <div className="modal-item">
                    <div className="flex">
                        <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                        <span className="modal-condition">Температура</span>
                    </div>
                    <select value={temp} onChange={(e) => setForm({ ...form, temperature: e.target.value as '℃' | '°F'})} className="modal-select">
                        <option>{temp}</option>
                        <option>{temp === '℃' ? '°F' : '℃'}</option>
                    </select>
                </div>
                <div className="modal-item">
                    <div className="flex">
                        <FontAwesomeIcon icon={faWind} />
                        <span className="modal-condition">Скорость ветра</span>
                    </div>
                    <select value={speed}  onChange={(e) => setForm({ ...form, windSpeed: e.target.value as 'km/h' | 'm/s' | 'ml/h'})} className="modal-select">
                        <option>{speed}</option>
                        <option>{speed === 'km/h' ? 'm/s' : speed === 'm/s' ? 'km/h' : 'm/s'}</option>
                        <option>{speed === 'km/h' ? 'ml/h' : speed === 'm/s' ? 'ml/h' : 'km/h'}</option>
                    </select>
                </div>
                <div className="modal-item">
                    <div className="flex">
                        <div className="pressure-icon modal-icon"></div>
                        <span className="modal-condition">Давление</span>
                    </div>
                    <select value={pressure} onChange={(e) => setForm({ ...form, pressure: e.target.value as 'mm' | 'gPa'})} className="modal-select">
                        <option >{pressure}</option>
                        <option>{pressure === 'mm' ? 'gPa' : 'mm'}</option>
                    </select>
                </div>
            </div>
        </>
    )
}
