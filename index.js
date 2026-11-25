const users = [
    { name: "Alex Morgan", role: "Male" },
    { name: "Sophia Williams", role: "Female" },
    { name: "Daniel Smith", role: "Male" },
    { name: "Olivia Brown", role: "Female" },
    { name: "Ethan Wilson", role: "Male" }
];

// Get HTML elements
const userName = document.getElementById("userName");
const userRole = document.getElementById("userRole");
const statusMessage = document.getElementById("statusMessage");

const randomButton = document.getElementById("randomButton");
const googleButton = document.getElementById("googleButton");

// Random User Button
randomButton.addEventListener("click", () => {

    const currentName = userName.textContent;

    let nextUser = users[
        Math.floor(Math.random() * users.length)
    ];

    // Prevent same user from appearing twice
    while (users.length > 1 && nextUser.name === currentName) {
        nextUser = users[
            Math.floor(Math.random() * users.length)
        ];
    }

    // Update profile information
    userName.textContent = nextUser.name;
    userRole.textContent = nextUser.role;

    statusMessage.textContent =
        "A random profile has been loaded.";
});

// Google User Button
googleButton.addEventListener("click", () => {

    statusMessage.textContent =
        "Google sign-in is a demo in this version.";

});