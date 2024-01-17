
document.addEventListener('DOMContentLoaded', () => {
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Contact form submitted. Thank you!');
        // Reset the form after submission
        contactForm.reset();
    });
});
