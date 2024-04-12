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