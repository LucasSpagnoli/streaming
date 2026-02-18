const Movie = async ({params}: { params: Promise<{ id: string }> }) => {
    const id = params.then((p) => p.id)
    return (
        <main>
            <h1 className={"mt-20 text-white"}>Movie {id} Page</h1>
        </main>
    );
}

export default Movie;
