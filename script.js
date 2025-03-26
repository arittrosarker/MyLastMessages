// Categorized user data
const userData = {
    "Online Friends": [
        { name: "Toha", message: "Hi Toha, great chatting online!" },
        { name: "Maisha", message: "Maisha, catch up soon online!" }
    ],
    "Cousins": [
        { name: "Ayon", message: "Hey Ayon, see you at the family gathering!" }
    ],
    "Family": [
        { name: "Mom", message: "Love you Mom!" },
        { name: "Dad", message: "Thanks for everything, Dad!" }
    ]
};

// DOM Elements
const introScreen = document.getElementById('introScreen');
const mainScreen = document.getElementById('mainScreen');
const continueBtn = document.getElementById('continueBtn');
const userListDiv = document.getElementById('userList');
const selectedUser = document.getElementById('selectedUser');
const userMessage = document.getElementById('userMessage');
const sidebar = document.querySelector('.sidebar');
const backBtn = document.getElementById('backBtn');

// Populate sidebar with categorized names
for (const category in userData) {
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category;
    userListDiv.appendChild(categoryTitle);

    const ul = document.createElement('ul');

    userData[category].forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        li.addEventListener('click', () => {
            selectedUser.textContent = user.name;
            userMessage.textContent = user.message;
            sidebar.style.display = 'none'; // Hide the list
            backBtn.style.display = 'block'; // Show the back button
        });
        ul.appendChild(li);
    });

    userListDiv.appendChild(ul);
}

// Continue button click event
continueBtn.addEventListener('click', () => {
    introScreen.style.display = 'none';
    mainScreen.style.display = 'flex';
});

// Back button click event
backBtn.addEventListener('click', () => {
    // Go back to the user list and hide the message
    sidebar.style.display = 'block';
    backBtn.style.display = 'none'; // Hide the back button
    selectedUser.textContent = "Click your name from the list.";
    userMessage.textContent = "";
});
