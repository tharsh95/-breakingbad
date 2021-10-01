import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Character from './Character'
import './landing.css'
import logo from './logo.png'

const Landing = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
        useEffect(() => {
            async function fetchData() {
                const data = await axios.get(`https://www.breakingbadapi.com/api/characters/`)
                setData(data.data)
            }
            fetchData()
        })
        const handleSearch = (e) =>{
            setSearch(e.target.value)

        }
    return (
        <div className="main">
            <h1>Breaking Bad Characters</h1>
            <div className="input">
                <input type="text" placeholder='Search Characters' value={search} onChange={handleSearch} />
            </div>
            <div className="character">
                <Character data={data} search={search} />
            </div>
        </div>
    )
}

export default Landing
