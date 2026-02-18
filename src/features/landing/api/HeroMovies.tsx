import getMovie from '@/lib/tmdb'
import { getMovieProps } from '@/types/movie.type';

async function getHeroMovie({id}: getMovieProps) {
    const data = await getMovie(id)
    const movie = {
        name: data.title,
        description: data.overview,
        image: data.backdrop_path,
    }
    return movie
}

async function heroMovies () {
    const movie1 = await getHeroMovie({id: 155})
    const movie2 = await getHeroMovie({id: 10625})
    const movie3 = await getHeroMovie({id: 315635})
    return [movie1, movie2, movie3]
};

export default heroMovies;