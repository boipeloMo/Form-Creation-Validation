// Wait for DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});

// Asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading text
        dataContainer.innerHTML = '';

        // Create and populate list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors gracefully
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}
