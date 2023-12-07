const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const popupForm = document.getElementById("popupForm");

popupBtn.addEventListener("click", function() {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

popupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Perform form validation here if needed

    // Redirect to another HTML page after form submission
    window.location.href = "anotherpage.html";
});
