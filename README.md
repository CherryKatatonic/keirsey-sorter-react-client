# Enhanced Keirsey Sorter (React Front-End)

## The Problem:

In the original format provided by Keirsey, the subject may find it very difficult to answer some of the questions because they feel closely or evenly aligned with both available answers, but they can only choose one or the other. This can cause a "randomization" effect and possibly result in an inaccurate assessment of the subject's temperament.

For example, say the subject answers 10 of the 70 questions randomly because they felt 50/50 about the answers for those particular questions. This may lead to the subject believing their temperament is of one type when it is actually of a different type, or perhaps an evenly mixed type. 

Just from those 10 randomly-answered questions, each having 2 possible answers, the user would have over 1,000 different possible results that they could choose from, making it very difficult to know for sure what their primary temperament type is, not to mention how time consuming it would be to find and evaluate all of those possible outcomes.

## The Solution:

The goal of this application is to address the fine lines between temperament types, as well as the "mixed" types referred to in Keirsey's book.

The enhanced Keirsey Sorter will offer the original temperament sorter designed by David Keirsey in its original format as presented in his book *Please Understand Me*, as well as one or more additional formats. The additional format(s) will allow the user to answer each question on the assessment in a *less binary* way, and present the final temperament result as *percentages* of each type rather than simply the nearest match.

This way, the subject will not be forced to choose between 2 answers that they closely or equally align with, resulting in a more *accurate* assessment, and they will also see how closely they align with *all* temperament types, resulting in a more *comprehensive* understanding.

Possible non-binary formats (sorted from simplest to most complex) may include:
1. The ability to choose both answers for each question
2. A scale for the user to rate how strongly they feel aligned with each answer
3. More than 2 possible answers for each question

Results will be presented textually and visually in the following format:
- The user's *primary* temperament type(s)
- *Percentages* of how closely the user is aligned with *each* type

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
