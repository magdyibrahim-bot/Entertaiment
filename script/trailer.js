document.querySelectorAll('.trailer-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const modal = document.getElementById("trailerModal");
        const videoUrl = this.getAttribute("data-trailer");
        document.getElementById("trailerVideo").src = videoUrl;
        modal.style.display = "block";
    });
});

document.querySelector(".close").addEventListener('click', function() {
    const modal = document.getElementById("trailerModal");
    document.getElementById("trailerVideo").src = "";
    modal.style.display = "none";
});

window.onclick = function(event) {
    const modal = document.getElementById("trailerModal");
    if (event.target == modal) {
        document.getElementById("trailerVideo").src = "";
        modal.style.display = "none";
    }
}
