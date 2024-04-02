const url = 'https://epic-free-games.p.rapidapi.com/epic-free-games';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '294dbc253fmsh1d14f71ce1537dbp1f08d3jsn43655135933d',
        'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}