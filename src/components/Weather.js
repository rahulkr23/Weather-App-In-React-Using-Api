import React, { useEffect, useState } from 'react';
import './css/style.css';

const Weather = () => {
    // city is initial value
    //setCity is convention

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Noida");

    useEffect(() => {
        const fetchApi = async () => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d74fe0d8a865bb0aad0367e1a379b82c`

            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        };

        fetchApi();

    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}

                        className="inputFeild"
                        onChange={(event) => { setSearch(event.target.value) }} />
                </div>


                {!city ? (
                    <p className="errorMsg">No Result Found</p>
                ) : (


                    <div className="info">
                        <h2 className="location">
                            <i className="fas fa-street-view"></i>{search}
                        </h2>
                        <h1 className="temp">
                            {city.temp}°Cel
                        </h1>
                        <h3 className="tempmin_max"> Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel </h3>
                    </div>
                )}



            </div>




        </>

    )
}

export default Weather;
