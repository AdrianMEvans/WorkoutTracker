# WorkoutTracker
Workout Tracker

## Description 
An application that enables the to view create and track daily workouts. The user can log multiple exercises in a workout on a given day and track the name, type, weight, sets, reps, and duration of exercise. 

## Table of Contents

* [Technology Usage](#usage)
* [User Story](#story)
* [Instructions](#Instructions)
* [Screenshots](#Screenshots)
* [Credits](#credits)


## Usage

The application makes use of the following technologies:

1.  ### HTML 5
    It is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwirsJnF_IjuAhUFheYKHXzxC_oQFjAKegQIAhAC&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHTML5&usg=AOvVaw1Pc1Tzxi9h86QKDBa0Ofro)_

2.  ### JavaScript 6
     Is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. The standard for JavaScript is ECMAScript. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6.  _[ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript)_

3.  ### CSS
    CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects._[ref](https://medium.com/html-all-the-things/what-is-a-css-framework-f758ef0b1a11)_

    We also made use of CSS framework called MaterializeCSS. CSS Frameworks are collection or libraries of CSS stylesheets that are prepped and ready to use. It simplifies coding to make layout and elements look beautiful. More details on MaterializeCSS can be found on their website **[here](https://materializecss.com)**. 

4.  ### Bootstrap
    Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components. _[ref](https://getbootstrap.com)_


5.  ### Visual Studio Code
    Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. _[ref](https://en.wikipedia.org/wiki/Visual_Studio_Code)_

    In conjuntion with GitHub we made use of the following plugins:
     
     a. *_GitLens_*
     It is an open-source extension for Visual Studio Code created, developed, and maintained by Eric Amodio. GitLens simply helps you better understand code; Quickly glimpse into whom, why, and when a line or code block was changed; Jump back through history to gain further insights as to how and why the code evolved. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiP-PSeh4nuAhVH73MBHcTWAT8QFjAHegQIBxAC&url=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Deamodio.gitlens&usg=AOvVaw0RHvZ8fzEvI-Efg2Cw6fxU)_

     b. *_Emmet_*
     Emmet is a toolkit for high-speed HTML, XML, XSL (or any other structured code format) coding and editing. The core of this plugin is a powerful abbreviation engine which allows you to expand expressions—similar to CSS selectors—into HTML code. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi16o_Dh4nuAhWK7HMBHXdEBCcQFjABegQICBAC&url=https%3A%2F%2Fgithub.com%2Femmetio%2Femmet-eclipse&usg=AOvVaw3kWt3hMlR-KF3B5nqVBAUX)_

     c. *_ESLint_*
     ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. It was created by Nicholas C. Zakas in 2013. Rules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues.  _[ref](https://eslint.org)_

6.   ### GitHub
     GitHub is a code hosting platform for version control and collaboration. It lets developers work together on projects from anywhere and allows you to create repositories and branches perform commits, Pull Requests. _[ref](https://guides.github.com/activities/hello-world/)_

7.   ### Express.JS
     Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. _[ref](https://expressjs.com)_

8.   ### MongoDB
     MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjZzfPIs-vwAhUaxjgGHeCzAfQQmhMwKXoECCMQAg&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMongoDB&usg=AOvVaw3PJdCI4udxnDks0Terluqa)_

9.   ### Mongoose
     Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjv15r2s-vwAhUTzTgGHXafCCgQFjAEegQIDhAD&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fintroduction-to-mongoose-for-mongodb-d2a7aa593c57%2F&usg=AOvVaw22o17VmM6Lkp-qWmszgGjM)_

10.  ### MongoDB Atlas
     The Easiest Way to Deploy, Operate, and Scale MongoDB in the Cloud in Just a Few Clicks. Create Deployments in Minutes w/ MongoDB Atlas. Supporting AWS. Types: Avail. on AWS, GCP, Azure, Zero-downtime migration, Pay as you go. _[ref](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi34cqUtOvwAhWMBXIKHf_aB0QYABAAGgJzZg&ae=2&ohost=www.google.com&cid=CAESQeD2EBy2vnuAkAIYcawpodFzBkvwXQN7glufUGUaEMTJPM3sv3QAwrZZ7fQbx3qaoxA_YJ3EJLBs_8O6m7rNIsZ6&sig=AOD64_3oi-sU-FBfvOMHMvUtrJIx44Tjyg&q&adurl&ved=2ahUKEwjQ4cKUtOvwAhWjyjgGHV9fDfoQ0Qx6BAgCEAE)_

11.  ### Heroku
     Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — they're the fastest way to go from idea to URL, bypassing many those infrastructure headaches. _[ref](https://heroku.com)_


## Story
As a user I want a starter page that when the page loads, I have the option to create a new workout or continue with my last workout.\

As a user I should be able to:\
\
  * Add exercises to the most recent workout plan.\

  * Add new exercises to a new workout plan.\

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.\

  * View the total duration of each workout from the past seven workouts on the `stats` page.\


## Instructions
User lands on the Landing page. If no current workout exists user will have option to add workout. If workout has already been logged then user will have option to add workout or continue with existing workout. User will be able to add more excersises or complete the workout after each excersise has been logged. User will have access to a stats screen where data of logged workouts and excersises can be viewed. 

## Screenshots

1. ### Landing Page 
     Page displays at launching the App if no existing workout exists.\
     \
  ![Landing Page](https://github.com/AdrianMEvans/WorkoutTracker/blob/main/Assets/LandingScreen.png?raw=true)


2. ## Continue or Add new Workout Page 
     Page displays if existing workout exists. User can continue or start new workout.\
     \
     ![Continue or Add new Workout Page](https://github.com/AdrianMEvans/WorkoutTracker/blob/main/Assets/ContinueOrNewWorkout.png?raw=true)

3. ### Add Cardio Page 
     Page where cardio excercises are added.\
     \
  ![Add Cardio Page](https://github.com/AdrianMEvans/WorkoutTracker/blob/main/Assets/AddCardio.png?raw=true)

4. ### Add Resistance Training Page  
     This is where resistance training is logged.\
     \
  ![Add Resistance Training Page](https://github.com/AdrianMEvans/WorkoutTracker/blob/main/Assets/AddResistance.png?raw=true)

5. ### Stats Page 
     This page displays that stats from the excersises that have been logged.\
     \
  ![Stats Page](https://github.com/AdrianMEvans/WorkoutTracker/blob/main/Assets/DashboardScreen.png?raw=true)

6. ### MongoDBAtlas Page 
     This shows the documents being created when excersises are logged.
  ![MongoDBAtlas Page](https://github.com/AdrianMEvans/WorkoutTracker/blob/main/Assets/MongoDBAtlasDocumentsCreated.png?raw=true)


## Credits
:bellhop_bell: 
Developed by:

Contact | Mobile | E-mail
------------ | ------------- | ------------
Adrian | 0424 064 104 | adrian@polywhiz.com