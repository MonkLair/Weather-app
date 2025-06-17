import { Routes, Route } from "react-router"
import MapsPage from "./pages/MapsPage/MapsPage"
import MainPage from "./pages/MainPage/components/MainPage"
import PageLayout from "./components/Layouts/PageLayout"
import NewsPage from "./pages/NewsPage/components/NewsPage"

function App() {


    return (
        <>
            <Routes>
                <Route element={<PageLayout/>}>
                    <Route index element={<MainPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/maps' element={<MapsPage />} />
                </Route>
            </Routes >
        </>
    )
}

export default App
