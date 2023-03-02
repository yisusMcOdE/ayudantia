import './CardMovie.css';

export const CardMovie = ({item}) => {

    const title = item.original_title;
    const imagePath = 'https://image.tmdb.org/t/p/original'+item.poster_path;
    const calificacion = item.vote_average;

    return (
        <div className="cardMovie">
            <div>
                <img src={imagePath}/>
            </div>
            <div>
                <label>{title}</label>
            </div>
            <div>
                <label>Calificacion : {calificacion}</label>
            </div>
        </div>
    )
}