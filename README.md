## What's Cookin'

A front-end project by [Taylor Johnson](https://github.com/taylorjohnson141), [Nicole Gooden](https://github.com/nicolegooden), and [Caleb Cyphers](https://github.com/CalebCyphers).

### Project Overview

This project is meant to present the user with a display of recipes, from which the user can choose to favorite recipes, add to the upcoming recipes section, or view the recipe information popup that details the total cost of ingredients, required ingredients, and instructions.  A search feature has been implemented so that the user can find desired recipes more quickly, based on ingredient, tag, or name.  The user also has access to its pantry, where pantry item cards are shown with the amount in stock. 

### Technologies 

+ HTML, CSS, JavaScript
+ Fetch (GET) to API
+ Chai Spies for DOM methods
+ SASS for CSS styling
+ Webpack

### Installation

1. Clone this repo to the local computer using `git clone` on the CLI. followed by the copied SSH link from the green `Code` button.

1. Run `npm install` to install all NPM dependencies.

1. From the terminal, run `npm run-script build` to allow the building of Webpack-related files.

1. From the terminal, run `npm start` to get the server going. There will be confirmation in the form of a `Compiled successfully` message when this is complete.

1. Click the link, `http://localhost: 8080/` to open what's running from the server in the browser.  If changes are saved from the code editor (Atom, VS Code, etc.), the live server will auto-update to reflect those changes.

### Preview

Desktop to Tablet to Mobile Responsiveness

![gif showing responsive design from desktop, to tablet, to mobile](http://g.recordit.co/CRvCSzJ5UY.gif)

Functionality

![gif showing user interaction across displays](http://g.recordit.co/ObVuaoi3vf.gif)

### Wins

+ Fetch requests (GET) are resolved without any crashes
+ SASS makes use of variables, mixins, etc.
+ Workflow: all teammates approved changes before a PR was merged

### Challenges

+ Planning and working with a codebase that had been set up with significant amounts of code, some of which needed a lot of refactoring.  Our team spent a majority of our time deciphering what the codebase was already managing well in terms of UI and JS, where code existed, and how to make the best use of our time moving forward in the process.  We felt stuck for the first few days while we were putting the pieces together, and attribute that to the delay of product progression overall.  Next time, we would plan more thoroughly and do some more inspecting of the codebase we're given.

+ Accessing data from the resolved promises of Fetch requests.  This challenge mostly pertains to figuring out when DOM methods and `scripts` functions would have access to the data from each fetch request.

+ Spies - how they work and how they are tested with a 'mock' object that represents `domUpdates {}` 

+ Project Board - our tickets were not modular enough in a way that we could close issues consistently on PRs.  We should have broken them down into smaller tasks and kept up with the project board in a way that would benefit our workflow.

### Next Steps

+ Fix the recipe popup so that the font, colors, and layout are more user-friendly
+ Refactor our functions for better readability
+ Create a hover state so a cursor appears when a user hovers over a clickable element
+ Make UI more sensible and straightforward, i.e. 
    + Make it known that the recipe image, when clicked, will display that recipe's popup
    + Add a confirmation that a recipe has been added to the upcoming recipes when a recipe card's `+` icon is clicked.
    + Add a 'Back to Home' button rather than double clicking `Favorites` to return to the display of all fetched recipes









