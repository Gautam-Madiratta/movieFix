# Movie Site using TMDb API

![Movie Site Screenshot](./screenshot.png)

## Overview

This project is a movie site that leverages the [TMDb (The Movie Database) API](https://www.themoviedb.org/documentation/api) to fetch and display information about movies. It allows users to explore popular movies, search for specific titles, and filter movies by genres.

## Features

- **Browse Movies**: View a list of popular movies fetched from TMDb.
- **Search**: Search for movies based on title.
- **Filter by Genres**: Filter movies by specific genres such as Action, Comedy, Drama, etc.
- **Infinite Scrolling**: Utilizes infinite scroll to load more movies as the user scrolls down.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For declarative routing in the application.
- **Infinite Scroll Component**: Enhances the user experience by loading more movies dynamically.
- **CSS**: Custom styles for layout and components.
- **TMDb API**: Provides access to a vast database of movies, including details like titles, genres, and release years.

## Getting Started

To run this project locally, follow these steps:

### How to run the project:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Gautam-Madiratta/movieFix
   cd movieFix

2. **Run the dependencies**:

   ```bash
   npm install react-router-dom react-infinite-scroll-component react-top-loading-bar

3. **Clone the repository**:

   ```bash
   git clone https://github.com/Gautam-Madiratta/movieFix
   cd movieFix   

4. **Clone the repository**:

   ```bash
   git clone https://github.com/Gautam-Madiratta/movieFix
   cd movieFix


## Usage

1. **Obtain an API key from TMDB**

2. **Create a .env file in the root directory and add your API key:**

```makefile
REACT_APP_TMDB_API_KEY=your_api_key_here
```

3. Start the development server:

   ```bash
    npm run start

4. Open your browser and go to http://localhost:3000 to view the website.

API Reference
This project uses the TMDB API to fetch movie data. Make sure to sign up on TMDB to obtain an API key. The following endpoints are used:

/search/movie: Search for movies by title.
/movie/{movie_id}: Get details about a specific movie.
Contributing
Contributions are welcome! If you have any suggestions, bug fixes, or improvements, please follow these steps:

Fork the repository and create your branch (git checkout -b feature/awesome-feature).
Commit your changes (git commit -am 'Add some awesome feature').
Push to the branch (git push origin feature/awesome-feature).
Open a pull request.
License
This project is licensed under the MIT License
You need an API key from TMDb to fetch movie data. Get it from TMDb API.

Create a .env file in the root directory of your project.

Add your API key to .env file:

plaintext
Copy code
REACT_APP_TMDB_API_KEY=your-api-key-here
Start the application:

bash
Copy code
npm start
Open the app:

Open http://localhost:3000 in your browser to view the movie site.

Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests to propose changes.

License
This project is licensed under the MIT License.

Acknowledgments
TMDb API Team: For providing the movie data API.
React Community: For the powerful tools and libraries that make projects like this possible.
Additional Notes:
Screenshots: Include screenshots of your application to give potential users and contributors a visual overview of the project.
Live Demo Link: If your project is deployed online, provide a link to the live demo.
Troubleshooting: Include common issues or troubleshooting tips if users encounter problems running the project locally.
Contact Information: Optionally, provide your contact information or social media handles for questions and feedback.







# Getting Started with Create React App

This project was created using [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

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
