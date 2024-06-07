document.addEventListener('DOMContentLoaded', () => {
    // Modal handling
    function openModal(projectId) {
        const modal = document.getElementById('modal');
        const project = document.getElementById(projectId);
        const descriptions = document.querySelectorAll('.modal-description');
        
        descriptions.forEach(desc => desc.style.display = 'none');
        project.style.display = 'block';
        modal.style.display = 'block';
    }

    function closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target == modal) {
            closeModal();
        }
    }

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate form submission
        setTimeout(() => {
            confirmationMessage.style.display = 'block';
        }, 500);

        // Hide confirmation message after 3 seconds
        setTimeout(() => {
            confirmationMessage.style.display = 'none';
            contactForm.reset();
        }, 3500);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch('send_email.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(text => {
            confirmationMessage.textContent = text;
            confirmationMessage.style.display = 'block';
            setTimeout(() => {
                confirmationMessage.style.display = 'none';
                contactForm.reset();
            }, 3500);
        })
        .catch(error => {
            confirmationMessage.textContent = 'Oops! There was a problem with your submission.';
            confirmationMessage.style.display = 'block';
        });
    });
});