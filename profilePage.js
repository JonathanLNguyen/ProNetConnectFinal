document.addEventListener('DOMContentLoaded', function() {
    const userInfoForm = document.getElementById('userInfoForm');

    if (userInfoForm) {
        userInfoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get form inputs
            const formData = new FormData(userInfoForm);

            // Iterate through form data and store it in sessionStorage
            formData.forEach((value, key) => {
                sessionStorage.setItem(key, value);
            });

            alert('User information saved to sessionStorage!');
        });
    }
});