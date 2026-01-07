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
const url = window.location.href;
makePredictionRequest(url);