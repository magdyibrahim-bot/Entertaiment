function getMovies() {
    return JSON.parse(localStorage.getItem('movies')) || [];
}

function saveMovies(movies) {
    localStorage.setItem('movies', JSON.stringify(movies));
}

function addMovie(event) {
    event.preventDefault();

    const name = document.getElementById('movie-name').value;
    const rating = document.getElementById('movie-rating').value;
    const category = document.getElementById('movie-category').value;
    const image = document.getElementById('movie-image').value;
    const view = document.getElementById('movie-view').value;
    const download = document.getElementById('movie-download').value;
    const trailer = document.getElementById('movie-trailer').value;
    const type = document.getElementById('movie-type').value;
    

    
    const movies = getMovies();
    movies.push({ name, rating,category ,type,image, view, download, trailer });
    saveMovies(movies);
    

    document.getElementById('movie-form').reset();
    
    
}

document.getElementById('movie-form').addEventListener('submit', addMovie);