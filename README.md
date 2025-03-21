# Meal Genie 💪

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)


## Introduction

**MealGenie** is a personalized meal planning application that tailors weekly meal plans for **Habeshan** based on user-specific data such as age, current weight, target weight, dietary preferences, and more. By integrating AI analysis and the Spoonacular API, MealGenie offers customized meal suggestions to help users achieve their health goals.

## Demo  

🎥 **Watch the Demo Video**:  
https://github.com/user-attachments/assets/65a24e87-a431-4eba-a1fa-c1f7a2b0612e



🌐 **Live Demo**:  
[Try MealGenie Now!](https://your-live-demo-link.com)  

## Features

✅ **Personalized Meal Plans**: Weekly meal plans customized to user preferences.  
🤖 **AI-Powered Analysis**: Uses AI to refine meal plans based on progress.  
🥗 **Spoonacular API Integration**: Fetches recipes, nutrition info, and grocery lists. 

🛒 **Grocery List Generation**: Generates a shopping list for easy meal preparation.  
🎨 **User-Friendly Interface**: Simple and intuitive UI for seamless experience. 

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)
- [Git](https://git-scm.com/)

## Steps

### 1️⃣ **Clone the Repository**:
   ```bash
   git clone https://github.com/yoni-tad/mealgenie.git
   cd mealgenie/front-end
   ```
### 2️⃣ Setup project
- Go to front-end folder
- Install all packages
- Setup SPOONACULAR API at .env 
- Setup Gemini AI at .env 
- Run with **npm dev start**

  
## Usage
1. Open in Browser: Navigate to http://localhost:5173.
2. Set Preferences: Provide age, weight, dietary restrictions, and goals.
3. Generate Meal Plan: Receive a 7-day meal plan tailored for you.
4. Also can generate recipe


## Technologies Used
- Frontend: React, JavaScript, Tailwind CSS
- API: SPOONACULAR
- AI: Gemini AI

## Project Structure
```sh
📁 MealGenie
 ┣ 📁 front-end          # Frontend (React)
 ┃ ┣ 📁 src              # Source files
 ┃ ┃ ┣ 📁 components     # Reusable UI components (forms, buttons, cards, etc.)
 ┃ ┃ ┣ 📜 app.jsx        # Main React app entry file
 ┃ ┃ ┣ 📜 ai.js          # Gemini AI
 ┃ ┃ ┣ 📜 index.css      # styles, Tailwind
 ┃ ┃ ┣ 📜 main.jsx       # ReactDOM render main entry
 ┃ ┣ 📜 package.json    # Dependencies & scripts
 ┃ ┣ 📜 .env            # Environment variables (API keys)
```

## Contributing
We welcome contributions to improve MealGenie!

1. Fork the Repository.
2. Create a New Branch:
```bash
git checkout -b feature/YourFeatureName
```
3. Commit Your Changes:
```bash
git commit -m 'Add some feature'
```
4. Push to GitHub:
```bash
git push origin feature/YourFeatureName
```
5. Open a Pull Request on GitHub.


## Contact
📧 Email: yonitad2404@example.com
🔗 GitHub: yoni-tad

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
