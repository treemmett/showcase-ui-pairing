# Getting the app set up and running
You'll need to install yarn first via npm
```
npm install --global yarn
```
In the project directory, you can run:
```
yarn install
```
then you should be able to do
```
yarn start
```
To start the dev server.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Testing
We set up [Cypress component testing](https://docs.cypress.io/guides/component-testing/introduction#What-is-Component-Testing) for this repo. It's still in alpha,
so there's no expectations that you know how it works. There's an example test at `App.spec.js` where we can write additional tests or if we make any new components,
we can figure out how to get those tested. Opening the test runner is pretty straight forward: 
```
yarn cypress open-ct
```

# Tasks
Let's build a wikimedia image search!
Here's some documentation about the endpoint: https://api.wikimedia.org/wiki/API_reference/Core/Search/Search_content \
Use whatever library you prefer to make your requests. We use axios in most of our code, but feel free to use whatever you're comfortable with.
