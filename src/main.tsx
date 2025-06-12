import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import PageLayout from './components/PageLayout.tsx'
import NewsPage from './components/NewsPage.tsx'
import MapsPage from './components/MapsPage.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<PageLayout/>}>
                    <Route index element={<App/>}/>
                    <Route path='news' element={<NewsPage/>}/>
                    <Route path='maps' element={<MapsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    </StrictMode>,
)
