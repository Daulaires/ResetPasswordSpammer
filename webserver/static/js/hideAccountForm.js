document.addEventListener('DOMContentLoaded', function() {
    const toggleCreateAccountFormButton = document.getElementById('toggleCreateAccountForm');
    const createAccountForm = document.getElementById('createAccountForm');

    // Function to update the button text based on the current visibility of the form
    function updateButtonText() {
        if (createAccountForm.style.display === 'none') {
            toggleCreateAccountFormButton.textContent = 'Show Create Account';
        } else {
            toggleCreateAccountFormButton.textContent = 'Hide Create Account';
        }
    }

    // Initial call to set the correct text on page load
    updateButtonText();

    toggleCreateAccountFormButton.addEventListener('click', function() {
        if (createAccountForm.style.display === 'none') {
            createAccountForm.style.display = 'block';
        } else {
            createAccountForm.style.display = 'none';
        }
        // Update the button text after toggling the form's visibility
        updateButtonText();
    });
});