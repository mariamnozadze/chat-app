# chat-app
A real-time chat application built with React, Vite, Node.js, and ChatEngine

# Introduction
The Chat App is a modern real-time chat application built with React, Vite, Node.js, and ChatEngine. It provides a seamless communication platform where users can chat with each other in real-time. 

# Features
* Real-time chat functionality.
* User authentication.
* Group chat support.
* Responsive design for mobile and desktop.

## Getting Started
Follow these instructions to set up and run the Chat App on your local machine.

# Prerequisites
Before you begin, make sure you have the following installed:

 * Node.js
 * npm (usually comes with Node.js)
 * Git

# Installation
1. Clone the repository to your local machine:
```
git clone https://github.com/mariamnozadze/chat-app.git
```
2. Navigate to the project directory:
```
cd chat-app
```
3. Install the dependencies:
```
npm install
```
# Usage
* Start the development server:
```
npm install
```

# Configuration
The Chat App uses ChatEngine for real-time chat functionality. To configure it, you need to obtain API keys from ChatEngine and update the .env file in the project root directory.
   
1. Create a .env file in the project root directory:
```
touch .env
```
2. Open the .env file and add your ChatEngine credentials:

```
REACT_APP_CHAT_ENGINE_PROJECT_ID=your_project_id
REACT_APP_CHAT_ENGINE_PRIVATE_KEY=your_private_key
REACT_APP_CHAT_ENGINE_USER_NAME=your_default_username

```
Replace your_project_id, your_private_key, and your_default_username with your actual ChatEngine credentials.

# Usage
Once you have completed the installation and configuration steps, you can start the Chat App by running the following command:
```
npm start
```
