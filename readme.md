## Installation
npm init -y

npm install express mongoose dotenv

npm install --save-dev typescript @types/node @types/express ts-node-dev

## Usage

Define the Variables:

export MONGO_USERNAME=<your_username>

export MONGO_PASSWORD=<your_password>

construct the "export MONGO_URI="mongodb+srv://$MONGO_USERNAME:$MONGO_PASSWORD@cluster0.azhly.mongodb.net/userdb?retryWrites=true&w=majority" and add in .env file
