import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true, showLinkBack = false, showImageBack = false }) => {
    return (
        <div className="movie-card">
            {showLinkBack && <Link to="/"><button>Voltar</button></Link>}
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            {showImageBack && <img src={imageUrl + movie.backdrop_path} alt={movie.title} />}
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MovieCard