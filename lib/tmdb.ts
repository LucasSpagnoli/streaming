const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTU4MjBiNjUyMDcxYmZmZTAwYTFjMmMzN2RkM2IwOSIsIm5iZiI6MTc3MDE1MTQ1Mi4zNjIsInN1YiI6IjY5ODI1ZTFjNjIyYTlhNzAxNjMyZTNkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AZYaoeisOoPt2hlUoCCbac4keXZQEfNPOzFEypcEwTY'
    }
};

type getHeroMovieProps = {
    id: number;
}

async function getHeroMovie({id}: getHeroMovieProps) {
    const detailsURL = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
    const detailsRes = await fetch(detailsURL, options)
    const detailsData = await detailsRes.json()

    const imageURL = `https://api.themoviedb.org/3/tv/${id}/images`;
    const imageRes = await fetch(imageURL, options)
    const imageData = await imageRes.json()

    const movie = {
        name: detailsData.name,
        description: detailsData.overview,
        image: imageData.backdrops.slice(0,3),
    }
    return movie
}

(async () => {
    await getHeroMovie({ id: 72844 });
})();

export default getHeroMovie;
