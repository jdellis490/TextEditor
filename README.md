# TextEditor

## Description
This project was a text editor that creates notes or code snippets in the browser but also has capabilites of working offline if necessary. It allows the user to even download the editor and save it as an application on their commputer by means of an extension. Using the indexedDB database, it has methods of getting, storing, and retrieving data. This project helped me understand how to set up services workers and webpack configurations.

## Installation
To install project locally one must follow the scripts in the main `package.json` file to set it up, however the application is deployed on Heroku [here](https://jate-pwa-editor.herokuapp.com/).

## Screenshot
Here is a screen shot of the application and the console log showcasing the stored data:


## Usage
Once the application is running a user can use it in the browser or install it and work offline. Simply type info into the application and when you click away, it stores it into the indexedDB. So when one enters the application again their info is stored and they can reference it again.