import React, { useState } from 'react'
import axios from 'axios'
import icon from './assets/icons8-search-30.png';


function App() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8f9b4ef4d3573285bf282f224cb51f32`

    const searchLocation = () => {

        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')
    }

    return (
        <div className='app'>
            <div className='search'>
                <input
                    className='a'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='Enter Location'
                    type="text" />
                <img src={icon} className='icon' onClick={searchLocation} />

            </div>

            <div className='container'>
                <div className='top'>
                    <div className='location'>
                        <p className='xyz'>{data.name}</p>
                    </div>
                    <div className='temp'>

                        {data.main ? <h1 className='abc'>{data.main.temp.toFixed()}°F</h1> : null}
                    </div>
                    <div >
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
                {data.name != undefined && <div className='bottom'>
                    <div className='feels'>
                        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                        <p>Feels like</p>
                    </div>
                    <div className='humidity'>
                        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className='wind'>
                        {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>}

            </div>
        </div>
    );
}
export default App;