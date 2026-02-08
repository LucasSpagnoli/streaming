const apikey = process.env.TMDB_KEY

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apikey}`
    }
};

type getHeroMovieProps = {
    id: number;
}

async function getHeroMovie({id}: getHeroMovieProps) {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const res = await fetch(url, options)
    const data = await res.json()

    const movie = {
        name: data.name,
        description: data.overview,
        image: data.backdrop_path,
    }

    console.log(movie)
    return movie
}

// (async () => {
//     await getHeroMovie({ id: 72844 });
// })();

export default getHeroMovie;