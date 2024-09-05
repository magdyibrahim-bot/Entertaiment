// Function to show the trailer modal
function showTrailer(trailerUrl) {
    const modal = document.getElementById('trailer-modal');
    const iframe = document.getElementById('trailer-frame');
    iframe.src = trailerUrl; // Set the trailer URL to the iframe
    modal.style.display = 'block'; // Show the modal

    // Close the modal when the user clicks on the "X" button
    document.getElementById('close-modal').onclick = function() {
        modal.style.display = 'none';
        iframe.src = ''; // Clear the iframe src to stop the video
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            iframe.src = ''; // Clear the iframe src to stop the video
        }
    };
}
