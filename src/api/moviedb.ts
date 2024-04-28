const baseUrl = 'https://api.themoviedb.org/3'
export const endpoints = {
    'trending': {
        url: `${baseUrl}/trending/movie/day?language=en-US`
    },
    'upcoming': {
        url: `${baseUrl}/movie/upcoming?language=en-US&page=1`
    },
    'topRated': {
        url: `${baseUrl}/movie/top_rated?language=en-US&page=1`
    }
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDBTOKEN}`
  }
};

export const getMovieData = async (type: string) => {
    if (!Object.keys(endpoints).includes(type)) {
        return {
            result: 'error',
            data: 'movie type incorrect, please choose "trending", "upcoming" or "topRated"'
        }
    }
    try {
        const endpointKey = `${type}MovieEndpoint`;
        const response = await fetch(endpoints[endpointKey].url, options)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
