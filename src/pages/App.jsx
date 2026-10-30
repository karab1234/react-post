import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "../component/Header";
import {Contact} from './components/Contact'
import { BrowserRouter } from 'react-router-dom'
import AboutPage from './pages/about'
import Servicespage from './pages/services'
import ContactPage from './pages/contact'
import HomePage from './pages/home'
import NotfoundPage from './pages/notfound'

function App() {

    return (
        <BrowserRouter>
        <Header/>
        <main className='container'>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/services' element={<ServicePage />}/>
                <Route path='/contact' element={<ContactPage />}/>
                <Route path='*' element={<NotfoundPage />}/>
            </Routes>

        </main>
        </BrowserRouter>
    )
}