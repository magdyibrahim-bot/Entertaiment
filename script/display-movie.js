// Function to get movies from local storage

function getMovies() {
    return JSON.parse(localStorage.getItem('movies')) || [];
}

// Function to display movies
function displayMovies() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    const movies = getMovies();

    movies.forEach((movie, index) => {
        if (movie.type === "Movie") {
            const movieCard = document.createElement('div');
            movieCard.className = 'card';
            movieCard.id = `film_${index}`;
            movieCard.dataset.category = movie.category || 'unknown';

            movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.name} Image" class="movie-image">
            <div class="card-content">
                <h2 class="movie-title">${movie.name}</h2>
                <p><i class="fa-solid fa-star"></i> ${movie.rating}</p>
                <a href="${movie.view}" target="_blank" class="download-button"><i class="fa-solid fa-eye"></i></a>
                <a href="${movie.download}" target="_blank" class="download-button"><i class="fa-solid fa-download"></i></a>
                <a href="#" class="trailer-button" data-trailer="${movie.trailer}"><i class="fa-solid fa-rectangle-ad"></i></a>
            </div>
        `;
            movieList.appendChild(movieCard);
        }
    });

    // Attach event listeners to trailer buttons
    const trailerButtons = document.querySelectorAll('.trailer-button');
    trailerButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const trailerUrl = button.getAttribute('data-trailer');
            showTrailer(trailerUrl);
        });
    });
}

// Function to show trailer in a modal
function showTrailer(trailerUrl) {
    const modal = document.getElementById('trailer-modal');
    const iframe = document.getElementById('trailer-iframe');
    const closeButton = document.querySelector('.close-button');

    iframe.src = trailerUrl; // Set the trailer URL

    // Display the modal
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        iframe.src = ''; // Stop the trailer from playing when closed
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            iframe.src = ''; // Stop the trailer from playing when closed
        }
    });
}

// Display movies on page load
displayMovies();
