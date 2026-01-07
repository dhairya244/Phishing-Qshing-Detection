# 🛡️ Phishing-Qshing-Detection

> A project to detect phishing (and QR phishing — “quishing”) attacks using machine learning and web analysis.

This repository contains the core code, detection models, and example tools to classify URLs and threats as phishing vs. legitimate. Phishing detection is a crucial task in cybersecurity to protect users from credential theft, scams, and malicious websites.

---

## 📌 Overview

Phishing attacks are one of the most common online threats where attackers trick users into revealing sensitive information by imitating trustworthy entities. This project aims to provide an automated system that can:

- Analyze URLs and web features  
- Predict whether a link is phishing or benign  
- Serve as the foundation for web extensions, APIs, or research tools

*The repository includes detection models, prediction scripts, and example extensions.* 

---

---

## 🛠️ **Flow**

![Flow](https://github.com/user-attachments/assets/0777b365-3a77-4eef-b947-6f0b8cdc24f7)


---

## 🧠 Features

- 🔍 **Machine Learning Based Detection** — Uses features from URLs and web patterns to classify phishing threats.
- 🚀 **Modular Structure** — Separate detection models and prediction utilities.  
- 🧪 **Example Tools** — Includes sample web extension code and prediction functions.  
- 📊 **Expandable** — Build your own classifier or integrate with frontend/security tools.

---

## 📁 Repository Structure

Phishing-Qshing-Detection/
├── Detection Models/ # Model code
├── antiPhishing-WebExtension/ # Web extension prototype
├── prediction/ # Prediction scripts
├── postmanToExtension/ # Helpers & utilities
├── .gitignore
└── README.md


---

## 🛠️ Setup & Installation

1. **Clone the repo**

```bash
git clone https://github.com/dhairya244/Phishing-Qshing-Detection.git
cd Phishing-Qshing-Detection
Install dependencies

(Example for Python — adjust based on repo files)

bash
Copy code
pip install -r requirements.txt
Run prediction script

bash
Copy code
python prediction/detect.py
Modify the above command based on the prediction script file present in the prediction/ folder.

📌 How It Works
Feature Extraction — Extracts meaningful signals (URL length, token presence, domain info). 
GitHub

Model Classification — A machine learning model classifies URLs as phishing or not.

Output — Gives a binary result and confidence score.

Works for both traditional hyperlink phishing and QR-based “quishing” URLs.

📌 Use Cases
Embedding into browser extensions for real-time URL scanning. 
GitHub

API for phishing detection in backend security platforms.

Research and experiments with new phishing detection models.

Cybersecurity tools for user protection.

👨‍💻 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

📄 License
This project is open source and available under the MIT License.

👤 Author
Dhairya Joshi
GitHub: https://github.com/dhairya244
