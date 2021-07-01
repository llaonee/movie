
export const endpoint = {
    getMovieNowPlaying : async page => fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=df2267df18faac0cdbb0c5cee59361d5&language=en-US&page=${page}`),
    getSimiliarMovie : async id => fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=df2267df18faac0cdbb0c5cee59361d5&language=en-US&page=1`),
}