
// ===================================
// 1. PROFILE CARD FLIP
// ===================================

const card = document.querySelector(".profile-card");

const skillsButton = document.querySelector("#skillsButton");
const backButton = document.querySelector("#backButton");

skillsButton.onclick = function() {
    card.classList.add("is-flipped");
};

backButton.onclick = function() {
    card.classList.remove("is-flipped");
};


// ===================================
// 2. PROJECT CARDS
// ===================================

const projectCards = document.querySelectorAll(".project-card");

const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");

let currentProject = 0;

function showProject(index) {
    projectCards.forEach(function(card) {
        card.classList.remove("selected");
    });

    projectCards[index].classList.add("selected");
}

showProject(currentProject);

projectCards.forEach(function(project, index) {
    project.onclick = function() {
        currentProject = index;
        showProject(currentProject);
    };
});

nextButton.onclick = function() {
    currentProject++;

    if (currentProject >= projectCards.length) {
        currentProject = 0;
    }

    showProject(currentProject);
};

previousButton.onclick = function() {
    currentProject--;

    if (currentProject < 0) {
        currentProject = projectCards.length - 1;
    }

    showProject(currentProject);
};


// ===================================
// 3. SCROLL TO TOP BUTTON
// ===================================

const topButton = document.querySelector("#topButton");

topButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


// ===================================
// 4. LEARNING CARDS SHUFFLE
// ===================================

const learningCards = document.querySelector(".learning-cards");
const shuffleButton = document.querySelector("#shuffleButton");

function shuffleDeck() {

    // Stack the cards if they are already spread
    if (learningCards.classList.contains("is-shuffling")) {
        learningCards.classList.remove("is-shuffling");
        return;
    }

    // Mix cards randomly
    const cards = Array.from(learningCards.children);

    for (let i = cards.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [cards[i], cards[randomIndex]] =
        [cards[randomIndex], cards[i]];
    }

    // Put cards back in their new order
    cards.forEach(function(card) {
        learningCards.appendChild(card);
    });

    // Spread the cards
    learningCards.classList.add("is-shuffling");
}

// Clicking the cards
learningCards.addEventListener("click", shuffleDeck);

// Clicking the shuffle button
shuffleButton.addEventListener("click", shuffleDeck);


// ===================================
// 5. INTRO SCREEN ANIMATION
// ===================================

const introScreen = document.querySelector(".intro-screen");

window.addEventListener("load", function() {

    // Wait for the greeting to appear
    setTimeout(function() {

        // Fade out the greeting
        introScreen.classList.add("text-fading");

        // After fading, split the panels
        setTimeout(function() {
            introScreen.classList.add("opening");
        }, 500);

    }, 1500);

});
