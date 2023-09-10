export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key':'c9953c6aa6msh6a0deb668461b9cp19ff6fjsn64b2818658ea',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }        
}

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': '144464e796mshfdd646966423fa3p134522jsn84237f13c1ce',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url,options)=>{
    const response = await fetch (url,options);
    const data = await response.json();

     return data;
}