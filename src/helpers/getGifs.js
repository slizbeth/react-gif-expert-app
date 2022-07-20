export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=x2rmMHbsYNEXrVtU8kHFemtr0l71dvrA&q=${ category }&limit=20`;
    const resp = await fetch( url);
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        tittle: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
