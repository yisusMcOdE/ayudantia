

export const myFetch = async() => {

    const finalUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=67372a2101549a124448d2d0c5b5653f';



    const response = await fetch(finalUrl);

    if(response.ok){
        const jsonResponse = await response.json();
        return jsonResponse;
    }

}