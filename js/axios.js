
const getMovies = async () => {
    const moviesResponse = await axios.get("../data/movies.json")
    console.log(moviesResponse.data)
    return moviesResponse.data
}

//getMovies()

// API (Application Programming Interface)

const BASE_URL = "https://pokeapi.co/api/v2"

axios.get(`${BASE_URL}/pokemon`, {
    params: {
        limit: 151 // Queryparams
    }
})
    .then( resp => console.log(resp.data) )
    .catch( err => console.log(err) )

axios.get(`${BASE_URL}/pokemon/250`) // params
    .then( resp => console.log(resp.data) )
    .catch( err => console.log(err) )