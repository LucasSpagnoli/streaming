type MovieProps = {
    name: string,
    description: string,
    image: string
}

type MoviesProps = {
    movies: MovieProps[]
}

type getMovieProps = {
    id: number;
}

export type { MovieProps, MoviesProps, getMovieProps };