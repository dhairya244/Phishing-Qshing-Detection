// content.js
console.log("Content script loaded!");
// Content script
// Function to generate a random string of a given length


function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

// Function to generate a random email address using UUID
function generateRandomEmail() {
    return `${generateRandomString(8)}@example.com`;
}

// Function to generate a random password using UUID
function generateRandomPassword() {
    return generateRandomString(12);
}

// Function to find the email, password fields, and submit button within a form
function findAndFillFormFields(form) {
    var emailField = form.querySelector('input[type="email"], input[name*="email"], input[id*="email"]');
    var passwordField = form.querySelector('input[type="password"], input[name*="password"], input[id*="password"]');
    var submitButton = form.querySelector('button[type="submit"], input[type="submit"]');

    return { emailField, passwordField, submitButton };
}

// Function to check if the code has already run for the current session
function hasCodeRunForCurrentSession() {
    var currentSessionFlag = sessionStorage.getItem('codeExecuted');
    return currentSessionFlag === 'true';
}

// Function to mark that the code has run for the current session
function markCodeAsRunForCurrentSession() {
    sessionStorage.setItem('codeExecuted', 'true');

    // Clear sessionStorage after 30 seconds
    setTimeout(function() {
        sessionStorage.removeItem('codeExecuted');
    }, 30000);
    
}

// Check if a form exists on the page and the code hasn't run for the current session
if (!hasCodeRunForCurrentSession()) {
    // Find the email, password fields, and submit button within the form
    var form = document.querySelector('form');

    if (form) {
        var { emailField, passwordField, submitButton } = findAndFillFormFields(form);

        if (emailField && passwordField && submitButton) {
            // Autofill email and password with random values
            emailField.value = generateRandomEmail();
            passwordField.value = generateRandomPassword();

            // Click the submit button
            submitButton.click();

            // Mark that the code has run for the current session
            markCodeAsRunForCurrentSession();
        }
    }


}
// const url = window.location.href;
//           const newURL = removeQueryParams(url);
//           console.log(newURL); // Output: https://www.facebook.com/login/
//           function removeQueryParams(url) {
//             // Split the URL into the base URL and query string
//             const urlParts = url.split('?');
//             const baseUrl = urlParts[0];
//             console.log(baseUrl);
//             // Return the base URL without the query string
//             window.location.href=baseUrl;
//             // window.history.push(basueurl);
//             // window.history.push(baseUrl);
//             console.log(window.location );
//             console.log(window.location.protocol);
//             console.log(window.location.hostname );
//             console.log(window.location.pathname);
//             return baseUrl;
//           }




// const url = window.location.href;
// const newURL = removeQueryParams(url);
// console.log(newURL); // Output: https://www.facebook.com/login/

// function removeQueryParams(url) {
//   // Split the URL into the base URL and query string
//   const urlParts = url.split('?');
//   const baseUrl = urlParts[0];

//   // Optional: Remove trailing slash if present
//   const cleanedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

//   // If you don't want to change the actual page URL, comment out the next line
//   // window.location.href = cleanedBaseUrl;

//   // Return the cleaned base URL without the query string
//   return cleanedBaseUrl;
  

// }




const url = window.location.href;
const newURL = removeQueryParams(url);

console.log(newURL);

function removeQueryParams(url) {
    const urlObject = new URL(url);

    // Check if there are query parameters to remove
    if (urlObject.search) {
        // Create a new URL without query parameters
        const newURL = urlObject.origin + urlObject.pathname;
        
        // If you don't want to change the actual page URL, comment out the next line
        window.location.href = newURL;

        return newURL;
    }

    // No query parameters to remove
    return url;
}
