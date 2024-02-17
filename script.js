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

    // When mouse enters the hamburger area, show the navigation links
    hamburger.addEventListener('mouseenter', function() {
        navUL.classList.add('show');
    });

    // Hide the navigation links when mouse leaves the navigation area
    navUL.addEventListener('mouseleave', function() {
        navUL.classList.remove('show');
    });
});

