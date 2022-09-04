import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import './MoviesGrid.sass'

//importando dados do arquivo .env
const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    //gerenciando estados do filme
    const [topMovies, setTopMovies] = useState([])

    //função asincrona que espera um url 
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        console.log(data.results[1])

        setTopMovies(data.results);
    };

    //montando url para a função getTopRatedMovies
    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes</h2>
            <div className="movies-container">
                {topMovies === 0 && <p>Carregando...</p>} 
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
}
export default Home