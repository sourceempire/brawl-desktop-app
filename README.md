# Brawl Desktop App

Fork from original source empire repoOB

## Start script

This script is used to run both a React development server and an Electron application at the same time. It starts the React development server by running the command `npm run start-react` and sets the `PORT` environment variable to the value provided in the command line arguments (defaults to 3000 if no value is provided). The script then checks for the availability of the React development server by making a GET request to `http://127.0.0.1:$PORT`
every second. Once the server is available, it runs the command `npm run start-electron` and sets the `APP_PORT` environment variable to the value of PORT.

</br>

To use this script, make sure you have Node.js and npm installed. You can run the script by executing the command "npm run dev" in your terminal. This command is based on the package.json file. However, if the package.json file is changed, the command may be subject to change

### **Start script example**

To run the app on localhost:4000, run the following command.

```bash
npm run dev port=4000
```
