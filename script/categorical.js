function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    if (category === 'all') {
        cards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        cards.forEach(card => {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}
filterCards('all');