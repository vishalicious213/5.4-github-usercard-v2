# Github User Cards

In this project I accessed the GitHub API and built a social card based on the data it returned. I created a component based on the data returned from a GET request to the GitHub API that requested my own data. I then expanded it to get followers data. 

The CSS and the base HTML was provided by the bootcamp I attended, but it was bare-bones (essentially a container \<div>). The cards were entirely generated through JavaScript by creating HTML elements, appending them into the DOM and adding classes to them. I also modified the GET request afterwards to increase the number of followers per page from 30 to 100.

## Need to know:

* JavaScript:
  * Creating DOM components with Javascript Functions
  * Utilizing 3rd party libraries (axios)
  * Promises, .then & .catch
  * HTTP GET requests
  * Array Methods
* DOM
  * Element selection
  * Basic DOM manipulation
  * Events and event listeners

## Process & tasks

### Part 1: Requesting Data from the GitHub API
* Include the script element linking the `axios` library in your HTML. If you do not remember the code you can find it here: https://github.com/axios/axios
* Follow the instructions found in the GitHubCard/index.js file to request data from the GitHub API.

### Part 2: Create the component function

* Once you are receiving data from the GitHub API, take some time to study the data and the information it is giving you. You will create the HTML template you see in the GitHubCard/index.js file and plugging in the dynamic data you are getting from the GitHub API.
* Once you complete the component, create a component based on your profile and add it to the DOM.

### Part 3: Your Friends

* After you have successfully added your own card to the DOM, we will get a list of your followers and programmatically add cards for them as well. Follow the instructions in GitHubCard/index.js. 

### Stretch Goals:

* Instead of manually creating a list of followers, do it programmatically. Create a function that requests the followers data from the API after it has received your data and create a card for each of your followers. Hint: you can chain promises.

## Deploy link

Deployed at https://vishalicious213.github.io/5.4-github-usercard-v2/