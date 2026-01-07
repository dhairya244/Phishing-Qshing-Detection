// background.js

function makePredictionRequest(url) {
    console.log("inside function");
    fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'bad') {
                // Show phishing popup if the website is predicted to be phishing
                console.log("!!!! phishy detected ");
                alert('Warning: This website is phishing.');
            }
        })
        .catch(error => {
            console.error('Prediction API Error:', error);
        });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "checkPhishiness") {
            const postmanUrl = "POSTMAN_API_ENDPOINT"; // Replace with Postman API endpoint

            fetch(postmanUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Add any other headers if needed
                },
                body: JSON.stringify({ url: request.url }),
                mode: "cors",
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Check if the URL is predicted to be phishing
                    makePredictionRequest(request.url);
                    sendResponse({ success: true, data });
                } else {
                    sendResponse({ success: false, error: "Postman API failed" });
                }
            })
            .catch(error => sendResponse({ success: false, error }));

            // Return true to indicate that sendResponse will be called asynchronously
            return true;
        }
    }
);
