# Aakash Labs React Web Application

## Overview
This is a modern React web application created for Aakash Labs. The application features a responsive design with multiple sections including a navigation header, hero slider, about us section, team section, contact form, and footer. It also includes an API demonstration page that showcases integration with various public APIs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Features
- Responsive design that works on mobile, tablet, and desktop devices
- Navigation header with links to different sections
- Hero slider with automatic transitions
- About us section highlighting company information and services
- Team section showcasing team members
- Contact form with form validation and API submission
- Social media links
- API demonstration page with examples of public API integration
- Deployment configuration for Vercel

## Technologies Used
- React.js
- React Router for navigation
- CSS for styling (no external UI libraries)
- Axios for API requests
- React Icons for social media icons

## Project Structure
```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Header/
│   ├── HeroSlider/
│   ├── SocialLinks/
│   └── Team/
├── pages/
│   ├── ApiPage/
│   └── Home/
├── App.js
├── App.css
├── index.js
└── index.css
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

## Deployment
This project is configured for deployment on Vercel. To deploy:
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project directory and follow the prompts
3. For production deployment, run `vercel --prod`

## API Integration
The API demonstration page showcases integration with public APIs for weather, news, and currency conversion. These are simulated for demonstration purposes.

## Contact Form
The contact form is configured to send data to the Aakash Labs API endpoint (https://api.aakashlabs.com).

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
