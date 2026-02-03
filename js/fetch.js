
const getMovies = async () => {
    const moviesResponse = await fetch("../data/movies.json", {
        method: "GET"
    })
    const response = await moviesResponse.json()
    console.log(response)
}

getMovies()