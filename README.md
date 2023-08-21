# ntd-test

By: Nicolas Vogt

## Synopsis and Decisions 

This is a reactjs based application meant to cover the given prompt. I noticed from the design given that several components represented similar components on `nintendo.com` 

Specifically:
1. search bar 
2. (1a)dropdown context filtering menu 
3. Article content section 
4. Buttons
5. Font ("museo-sans", sans-serif)

From the initial Interview I remember that it was important to stick to design as close as possible, while the instructions also allowed for some personal judgement. I thought the best way to conceptualize this idea was to rely on the standards that currently exist on `nintendo.com` 

Things like, hover states for buttons, active states for the search bar, animations, and clickable "area" for the article content section, are all intentionally reflective of their counterpart on the nintendo domains to remove guessing work on my end. 

### What I would improve with more time or consultation from design:

1. Responsive decisions: 
I made several decisions on the responsive aspects of design since the original image is static. On the nintendo site, the search bar and navigational menu is turned into a more complex bottom component representative of mobile design. 

2. Accessibility: if navigation led to a real link, using associated href tags. 

3. Themes/Internationalization: Adding additional themes (light/dark) for colors and i18n languages to the components would be the next step for further accessibility. 

4. Styled components with custom CSS: in the sprit of a component based library, adding custom properties via css variables would be a necessary next step for customization. 



## TO build: 

Necessary components:
1. NodeJS and NPM installation.

Windows:
https://learn.microsoft.com/en-us/windows/dev-environment/javascript/react-on-windows

Mac:
https://www.geeksforgeeks.org/how-to-install-reactjs-on-macos/#

2. `npm install` in local cmd application
3. `npm start`



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

