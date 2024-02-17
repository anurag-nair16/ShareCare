function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}


// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamburger');
//     const navUL = document.querySelector('nav ul');

//     hamburger.addEventListener('click', function() {
//         navUL.classList.toggle('show');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUL = document.querySelector('nav ul');

    // Function to toggle the menu visibility
    function toggleMenu() {
        navUL.classList.toggle('show');
    }

    // For desktop: show the navigation links on mouse enter
    hamburger.addEventListener('mouseenter', function() {
        
            toggleMenu();
        
    });

    // For mobile: toggle the navigation links on click
    hamburger.addEventListener('click', function(event) {
        
            // event.preventDefault(); // Prevent default behavior of anchor
            toggleMenu();
        
    });

    // For desktop: hide the navigation links when mouse leaves the navigation area
    navUL.addEventListener('mouseleave', function() {
      
            toggleMenu();
        
    });

});


