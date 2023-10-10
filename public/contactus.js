document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Perform form validation if needed
    if (!name || !email) {
        alert("Please fill out all fields.");
        return;
    }

    // Assuming you're using fetch to send a POST request
    fetch("/submitContactForm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => {
        if (response.ok) {
            // Redirect to success page after form submission
            window.location.href = "/success";
        } else {
            throw new Error("Form submission failed");
        }
    })
    .catch(error => {
        console.error("Error submitting form:", error);
        // Handle error if the form submission fails
    });
});
