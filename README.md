# node-todo-express-app
Node, Express, MongoDB backend application

How to run

Lets setup the environment
First go here — https://nodejs.org/en/download/ and Install NodeJS.
Download and Install MongoDB — https://www.mongodb.com/download-center#community
Download a good Text Editor or IDE. I Personally prefer Visual Studio Code — https://code.visualstudio.com/download
Now the environment Setup is done. Let’s get into the command line.
First we need to install ExpressJS. The most popular NodeJS Framework.
npm install -g express express-generator
This will install ExpressJS and the ExpressJS Official generator packages. Now let’s generate the Application using the Express Generator.
express --view=ejs todoapp
Now the express App is generated. Go inside the directory.
cd todoapp
npm install
All the necessary packages will be installed.
At first let’s install all the necessary packages we will be using throughout this app.
npm install bluebird mongoose mongoose-paginate nodemon
