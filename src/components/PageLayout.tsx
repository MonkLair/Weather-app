import { useState } from "react"
import NavigationPanel from "./NavigationPanel"
import { Outlet } from "react-router"
import type { DataForm } from "../models/IDataModels"

export default function PageLayout() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [form, setForm] = useState<DataForm>({ temperature: '℃', windSpeed: 'km/h', pressure: 'mmHg.' })

    return (
        <div className="root" onClick={() => setIsOpen(false)}>
            <NavigationPanel setForm={setForm} form={form} setIsOpen={setIsOpen} isOpen={isOpen} />
            <Outlet context={form} />
        </div>
    )
}
