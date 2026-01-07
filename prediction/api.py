# Import necessary libraries
from flask import Flask, request, jsonify
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from nltk.tokenize import RegexpTokenizer

# Load the pre-trained model
loaded_model = pickle.load(open('phishing_.pkl', 'rb'))

# Create a Flask app
app = Flask(__name__)

# Define a route for the API
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the URL from the request
        url = request.json['url']

        # Tokenize and predict using the loaded model
        result = loaded_model.predict([url])

        # Return the result as JSON
        return jsonify({'result': result[0]})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True)
