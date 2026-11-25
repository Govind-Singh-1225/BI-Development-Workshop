// User Data

const users = [
    { name: "Alex Morgan", role: "Male" },
    { name: "Sophia Williams", role: "Female" },
    { name: "Daniel Smith", role: "Male" },
    { name: "Olivia Brown", role: "Female" },
    { name: "Ethan Wilson", role: "Male" },
    { name: "Emma Johnson", role: "Female" },
    { name: "James Anderson", role: "Male" },
    { name: "Isabella Taylor", role: "Female" },
    { name: "Noah Thomas", role: "Male" },
    { name: "Mia Jackson", role: "Female" }
];


// Get HTML Elements

const userName = document.getElementById("userName");

const userRole = document.getElementById("userRole");

const statusMessage = document.getElementById("statusMessage");

const randomButton = document.getElementById("randomButton");

const googleButton = document.getElementById("googleButton");


// Function to Update Profile

function updateProfile(name, role) {

    userName.textContent = name;

    userRole.textContent = role;

}


// Random User Button

randomButton.addEventListener("click", function () {

    let randomIndex;

    let selectedUser;

    // Avoid repeating the current user

    do {

        randomIndex = Math.floor(
            Math.random() * users.length
        );

        selectedUser = users[randomIndex];

    } while (
        selectedUser.name === userName.textContent
    );

    // Update Profile

    updateProfile(
        selectedUser.name,
        selectedUser.role
    );

    statusMessage.textContent =
        "Random user loaded successfully!";

});


// Google User Button

googleButton.addEventListener("click", function () {

    const googleUser = {
        name: "Google User",
        role: "Verified Demo User"
    };

    // Update Profile

    updateProfile(
        googleUser.name,
        googleUser.role
    );

    statusMessage.textContent =
        "Google demo profile loaded successfully!";

});
