const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent =
            "Please complete all fields before submitting.";
        formMessage.style.color = "red";
        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent =
            "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent =
        "Thank you for your message!";

    formMessage.style.color = "green";

    form.reset();
});

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "Light Mode";
    } else {
        darkModeBtn.textContent = "Dark Mode";
    }
});