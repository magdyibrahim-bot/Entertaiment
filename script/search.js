function searchItems() {
    // Get the search input value and convert it to lowercase
    let input = document.getElementById('searchbar').value.toLowerCase();
    
    // Get all items to be searched
    let items = document.getElementsByClassName('card');
    
    // Loop through all items
    for (let i = 0; i < items.length; i++) {
        // Get the text content of the current item
        let itemText = items[i].textContent.toLowerCase();
        
        // Check if the item text includes the search input
        if (itemText.includes(input)) {
            items[i].style.display = ''; // Show the item
        } else {
            items[i].style.display = 'none'; // Hide the item
        }
    }
}
