// Select all scroll containers and their respective buttons
const scrollContainers = document.querySelectorAll('.scroller-container');

scrollContainers.forEach((container) => {
    const scrollContainer = container.querySelector('.scroller');
    const leftButton = container.querySelector('.scroll-left');
    const rightButton = container.querySelector('.scroll-right');

    // Attach event listeners to the buttons for this specific scroll container
    leftButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
});
