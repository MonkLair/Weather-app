import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import SettingsModal from "./SettingsModal";
import type { DataForm } from "../models/IDataModels";

interface NavigationPanelProps {
    setIsOpen: (arg: boolean) => void,
    isOpen: boolean,
    setForm: (arg: DataForm) => void,
    form: DataForm
}

export default function NavigationPanel({setIsOpen, isOpen, setForm, form}: NavigationPanelProps) {


    return (
        <>
            <div className="navbar-block">
                <div className="navbar-item">
                    <h1>
                        <Link to='/'>Weather <br /> APP</Link>
                    </h1>
                    <span>
                        <Link to='/' className='navbar-link'>Weather</Link>
                    </span>
                    <span>
                        <Link to='/news' className='navbar-link' >News</Link>
                    </span>
                    <span>
                        <Link to='/maps' className='navbar-link' >Maps</Link>
                    </span>
                </div>
                <div className="navbar-item">
                    <div onClick={(e) => {
                        e.stopPropagation()
                        setIsOpen(!isOpen)
                    }} className='navbar-settings'>
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                    {isOpen
                        ? <SettingsModal setForm={setForm} form={form}/>
                        : <></>
                    }
                </div>
            </div>
        </>
    )
}
