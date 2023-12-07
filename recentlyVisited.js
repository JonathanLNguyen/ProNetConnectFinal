document.addEventListener('DOMContentLoaded', function() {
    // Get the ul element to append the list items
    const recentlyVisitedList = document.getElementById('recentlyVisitedLinks');

    // Retrieve recently visited links from localStorage
    const visitedLinks = JSON.parse(localStorage.getItem('recentlyVisited')) || [];

    // Check if there are recently visited links
    if (visitedLinks.length > 0) {
        // Loop through the stored links and display them
        visitedLinks.forEach(url => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');

            link.href = url;
            link.textContent = url;
            listItem.appendChild(link);
            recentlyVisitedList.appendChild(listItem);

            // Log the URL to the console
            console.log(url);
        });
    } else {
        // If no history available, display a message
        recentlyVisitedList.innerHTML = '<li>No recently visited links</li>';
    }
});
