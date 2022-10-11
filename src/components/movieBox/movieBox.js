import '../movieBox/movieBox.css'

const MovieBox = ({movies}) => {
    return(
        <section className="posters">
            {movies !== undefined ? movies.map((filmes, index)=>{
                return(
                    <div key={index} className="movie">
                        <img src={filmes.Poster} alt={filmes.Title}></img>
                        <span>{filmes.Title}</span>
                    </div>
                )
            }): <h2>Nenhum filme encontrado!</h2>}
        </section>
    )
}

export default MovieBox