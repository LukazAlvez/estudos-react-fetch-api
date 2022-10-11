
async function fetchMovie (name){
    const url = `https://www.omdbapi.com/?s=${name}&apikey=b2cacd13`
    const response = await fetch(url)
    return await response.json()
}

export default fetchMovie;