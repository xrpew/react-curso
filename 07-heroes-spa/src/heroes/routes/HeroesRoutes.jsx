import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../UI'
import { DcPages, HeroPage, MarvelPages, SearchPage } from '../pages'
export const HeroesRoutes = () => {
  return (
<>
    <Navbar/>

    <div className="container">
        <Routes>
            <Route path="marvel" element={<MarvelPages />} />
            <Route path="dc" element={<DcPages />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

                {   /* Search, heroById     */}
            <Route path="/" element={<Navigate to="/search" />} />
          </Routes>
    </div>

</>
    )
}
