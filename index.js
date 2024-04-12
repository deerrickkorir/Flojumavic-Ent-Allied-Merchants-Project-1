document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      // You can perform validation here if needed
      // For example, check if the fields are not empty

      // Now you can do something with the form data, like sending it to a server
      // For this example, let's just log the data to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);

      // Optionally, you can reset the form after submission
      form.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    
    var firstSubmitButton = document.querySelector('button[type="submit"]');
    
   
    firstSubmitButton.addEventListener("click", function(event) {
     
      event.preventDefault();
      
      // Show an alert when the button is clicked
      alert("Form submitted successfully!");
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('github-form');
    const userList = document.getElementById('user-list');
    
    form.addEventListener('submit', function(event) {
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
            function displayUsers(users) {
                userList.innerHTML = ''; // Clear previous search results
                
                users.forEach(user => {
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
            }
        });