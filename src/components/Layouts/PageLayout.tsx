import { useState } from "react"
import { Outlet } from "react-router"
import type { DataForm } from "../../models/IDataModels"
import { NavigationPanel } from "../../modules/NavigationPanel"

export default function PageLayout() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [form, setForm] = useState<DataForm>({ temperature: '℃', windSpeed: 'km/h', pressure: 'mm' })

    return (
        <div className="root" onClick={() => setIsOpen(false)}>
            <NavigationPanel setForm={setForm} form={form} setIsOpen={setIsOpen} isOpen={isOpen} />
            <Outlet context={form} />
        </div>
    )
}
