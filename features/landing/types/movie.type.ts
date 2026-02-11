type MovieProps = {
    name: string,
    description: string,
    image: string
}

type MoviesProps = {
    movies: MovieProps[]
}

export type { MovieProps, MoviesProps };