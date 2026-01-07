const whitelist = ["https://www.google.com"];

function isWhitelisted(url) {
  return whitelist.some(whitelistedUrl => url.origin.includes(whitelistedUrl));
}

function createOverlay(isWhitelisted) {
  if (isWhitelisted) return;

  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 3s ease-out;
  `;
  // if (!isWhitelisted) {
  //   overlay.textContent =
  //     "This website is non-whitelisted and might track your activity. " ;
  // }

  if (!isWhitelisted) {
    let score = parseInt(localStorage.getItem('userScore')) || 100; // Get current score from localStorage
        score -= 1; // Reduce score by 1
        localStorage.setItem('userScore', score.toString()); // Save updated score to localStorage
    overlay.textContent =
      "This website is non-whitelisted and might track your activity. " ;
  }
  
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = 0;
  }, 3000);
}

function checkWhitelist() {
  const url = new URL(window.location.href);
  const isListed = isWhitelisted(url);
  if (document.body.firstChild && document.body.firstChild.tagName === "DIV") {
    document.body.removeChild(document.body.firstChild);
  }
  createOverlay(isListed);
}

checkWhitelist();
window.addEventListener("popstate", checkWhitelist);

// Event listener for tab closing (replace with your browser's specific event)
window.addEventListener("your-browser-tab-closing-event", () => {
  const url = new URL(window.location.href);
  if (!isWhitelisted(url)) {
    if (confirm(`This website (${url.hostname}) is not whitelisted and may track your activity. Clear cookies and history?`)) {
      // Inform the user on how to clear data manually through browser settings (replace with actual instructions)
      alert("Please open your browser settings and clear cookies and history for this website.");
    }
  }
});

function fadeOutAndUnlock(element, duration = 5000) { // Default 3 seconds
    element.style.opacity = 1; // Set initial opacity
    let fadeEffect = setInterval(function() {
        if (element.style.opacity <= 0) {
            clearInterval(fadeEffect);
            // Remove blocking mechanisms here if necessary 
        } else {
            element.style.opacity -= 0.1; // Decrease opacity over time
        }
    }, duration / 10); // Update opacity smoothly
}







// const whitelist = ["https://www.google.com"];

// // Function to retrieve user's score from local storage
// function getUserScore() {
//     return parseInt(localStorage.getItem('userScore')) || 100; // Default score is 100 if not set
// }

// // Function to save user's score to local storage
// function saveUserScore(score) {
//     localStorage.setItem('userScore', score.toString());
// }

// function isWhitelisted(url) {
//     return whitelist.some(whitelistedUrl => url.origin.includes(whitelistedUrl));
// }

// function createOverlay(isWhitelisted) {
//     if (isWhitelisted) return;

//     const overlay = document.createElement("div");
//     overlay.style.cssText = `
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     color: white;
//     font-size: 16px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     opacity: 1;
//     transition: opacity 3s ease-out;
//   `;
//     if (!isWhitelisted) {
//         overlay.textContent =
//             "This website is non-whitelisted and might track your activity. ";
//     }
//     document.body.appendChild(overlay);

//     setTimeout(() => {
//         overlay.style.opacity = 0;
//     }, 3000);
// }

// function checkWhitelist() {
//     const url = new URL(window.location.href);
//     const isListed = isWhitelisted(url);
//     if (document.body.firstChild && document.body.firstChild.tagName === "DIV") {
//         document.body.removeChild(document.body.firstChild);
//     }
//     createOverlay(isListed);
// }

// checkWhitelist();
// window.addEventListener("popstate", checkWhitelist);

// // Event listener for tab closing (replace with your browser's specific event)
// window.addEventListener("your-browser-tab-closing-event", () => {
//     const url = new URL(window.location.href);
//     if (!isWhitelisted(url)) {
//         if (confirm(This website (${url.hostname}) is not whitelisted and may track your activity. Clear cookies and history?)) {
//             // Inform the user on how to clear data manually through browser settings (replace with actual instructions)
//             alert("Please open your browser settings and clear cookies and history for this website.");
//         }
//     }
// });

// function fadeOutAndUnlock(element, duration = 5000) { // Default 3 seconds
//     element.style.opacity = 1; // Set initial opacity
//     let fadeEffect = setInterval(function () {
//         if (element.style.opacity <= 0) {
//             clearInterval(fadeEffect);
//             // Remove blocking mechanisms here if necessary 
//         } else {
//             element.style.opacity -= 0.1; // Decrease opacity over time
//         }
//     }, duration / 10); // Update opacity smoothly
// }

// // Update the score and save to local storage
// function updateScore(url) {
//     if (!isWhitelisted(url)) {
//         let score = getUserScore();
//         score -= 1; // Decrease score by 1
//         saveUserScore(score);
//         console.log("Score decreased! Current score:", score);
//     }
// }

// // Example: Simulating visiting a URL
// const visitedURL = "https://badwebsite.com";
// updateScore(new URL(visitedURL));