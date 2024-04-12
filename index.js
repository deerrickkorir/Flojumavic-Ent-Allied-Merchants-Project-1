document.addEventListener('DOMContentLoaded', function() {
    // Form Submission Handling
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Log form data to console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);

        // Optionally reset the form after submission
        form.reset();
    });

    // Button Click Handling
    const firstSubmitButton = document.querySelector('button[type="submit"]');
    firstSubmitButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Show an alert when the button is clicked
        alert('Form submitted successfully!');
    });

    // GitHub Search Handling
    const githubForm = document.getElementById('github-form');
    const userList = document.getElementById('user-list');

    githubForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const searchQuery = document.getElementById('search').value.trim();
        if (searchQuery === '') {
            alert('Please enter a search query');
            return;
        }

        const url = `https://api.github.com/search/users?q=${searchQuery}`;
        const headers = {
            'Accept': 'application/vnd.github.v3+json'
        };

        fetch(url, { headers })
            .then(response => response.json())
            .then(data => {
                userList.innerHTML = ''; // Clear previous search results
                data.items.forEach(user => {
                    const userItem = document.createElement('li');
                    const userLink = document.createElement('a');
                    userLink.href = user.html_url;
                    userLink.target = '_blank';
                    userLink.textContent = user.login;

                    const userAvatar = document.createElement('img');
                    userAvatar.src = user.avatar_url;
                    userAvatar.alt = `${user.login}'s avatar`;
                    userAvatar.width = 50;
                    userAvatar.height = 50;

                    userItem.appendChild(userAvatar);
                    userItem.appendChild(userLink);

                    userList.appendChild(userItem);
                });
            })
            .catch(error => {
                console.error('Error fetching GitHub data:', error);
            });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Form Submission Handling
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Log form data to console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);

        // Optionally reset the form after submission
        form.reset();
    });

    // Button Click Handling
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Show an alert when the button is clicked
        alert('Form submitted successfully!');
    });

    // GitHub Search Handling
    const githubForm = document.getElementById('github-form');
    const userList = document.getElementById('user-list');

    githubForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const searchQuery = document.getElementById('search').value.trim();
        if (searchQuery === '') {
            alert('Please enter a search query');
            return;
        }

        const url = `https://api.github.com/search/users?q=${searchQuery}`;
        const headers = {
            'Accept': 'application/vnd.github.v3+json'
        };

        fetch(url, { headers })
            .then(response => response.json())
            .then(data => {
                userList.innerHTML = ''; // Clear previous search results
                data.items.forEach(user => {
                    const userItem = document.createElement('li');
                    const userLink = document.createElement('a');
                    userLink.href = user.html_url;
                    userLink.target = '_blank';
                    userLink.textContent = user.login;

                    const userAvatar = document.createElement('img');
                    userAvatar.src = user.avatar_url;
                    userAvatar.alt = `${user.login}'s avatar`;
                    userAvatar.width = 50;
                    userAvatar.height = 50;

                    userItem.appendChild(userAvatar);
                    userItem.appendChild(userLink);

                    userList.appendChild(userItem);
                });
            })
            .catch(error => {
                console.error('Error fetching GitHub data:', error);
            });
    });
});

