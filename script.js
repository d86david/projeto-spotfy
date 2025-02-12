const searchInput = document.getElementById('search-input');
const restultArtist = document.getElementById('result-artist');
const restulPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm){
    const url = 'http://localhost:3000/artists?name_like=${searchTerm}'
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    restulPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
}

restultArtist.classList.remove('hidden');

document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === ''){
        restulPlaylist.classList.add('hidden');
        restultArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
} )