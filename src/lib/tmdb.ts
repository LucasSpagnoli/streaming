const apikey = process.env.TMDB_KEY

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apikey}`
    }
};



async function getMovie(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const res = await fetch(url, options)
    const data = await res.json()


    // console.log(data)
    return data
}

// (async () => {
//     await getMovie({ id: 72844 });
// })();

export default getMovie;