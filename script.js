// Categorized user data
const userData = {
    "Friends": [
        { name: "Toha", message: "Ummer kheal rakhish!" },
        { name: "Maisha", message: "vai amar age to tor morar kotha silo" }
    ],
    "Cousins": [
        { name: "Ayon", message: "topper" }
    ],
    "Family": [
        { name: "Mom", message: "kijani" },
        { name: "Dad", message: "Thanks for nothing" }
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

            // Hide the sidebar when a name is selected
            sidebar.style.display = 'none';
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
