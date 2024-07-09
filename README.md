# Movie Site using TMDb API : Fancode

![Movie Site Screenshot](./screenshot.png)

## Overview

This project is a movie site that leverages the [TMDb (The Movie Database) API](https://www.themoviedb.org/documentation/api) to fetch and display information about movies. It allows users to explore popular movies, search for specific titles, and filter movies by genres.

## Features

- **Browse Movies**: View a list of popular movies fetched from TMDb.
- **Search**: Search for movies based on title.
- **Filter by Genres**: Filter movies by specific genres such as Action, Comedy, Drama, etc.
- **Infinite Scrolling**: Utilizes infinite scroll to load more movies as the user scrolls down.
- **Movie Sorting**: After every 20 movies it shows movie with next year. As you scroll down it changes year to next year after 20 movies dynamically.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.
- **Mode**: Design is in dark mode

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For declarative routing in the application.
- **Infinite Scroll Component**: Enhances the user experience by loading more movies dynamically.
- **CSS**: Custom styles for layout and components.
- **TMDb API**: Provides access to a vast database of movies, including details like titles, genres, and release years.

## List of Requirements covered and not covered

- Infinite scrolling has been added to show movies as you scroll down till the current year (covered)
- Displayed a list of movies sorted in descending order of popularity. (covered)
- Showed the movie title, image, genre, cast, director, and a short description related. (covered)
to the movie in each information card. (covered)
- Loaded a total of only 20 movies for each year. it changes to next as you scroll down. (covered)
- By default, when a user lands on the page, display a list of movies of the year
2012 (covered)
- Implemented smooth scrolling behavior to load more movies as the user scrolls down
  i.e load movies of next year when user scrolls down. (covered)
- load movies of previous year when user scrolls up is not covered
- As and when the user scrolls and movies are added to the list, made sure that
this interaction is smooth and doesn’t cause any jitters. (covered)

- Genre Filter (Implemented/covered)
○ Provide a filter UI that allows users to filter movies by genre.
○ Fetch genres from this API and show genres as filters
○ When a user selects one or more genres, the list should only display movies of
the selected genres.
○ Please note that whenever a user selects a genre, a fresh list of movies should
be fetched from the API for that particular genre.

-Implement a search bar which searches for the movie based on the search string
and displays an infinite loading list of movies which matches the search. (Implemented/covered)
  

## Getting Started

To run this project locally, follow these steps:

### How to run the project:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Gautam-Madiratta/movieFix
   cd movieFix

2. **Run the dependencies**:

   ```bash
   npm install
   npm install react-router-dom react-infinite-scroll-component react-top-loading-bar

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

### API Reference
This project uses the TMDB API to fetch movie data. Make sure to sign up on TMDB to obtain an API key. The following endpoints are used:

/search/movie: Search for movies by title.

/movie/{movie_id}: Get details about a specific movie.

https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&primary_release_year=${initialYear}&page=${page}&vote_count.gte=100&with_genres=${genres}`; : Get movies with year , page number and genres

https://api.themoviedb.org/3/movie/{Movie_ID}?api_key=2dca580c2a14b55200e784d157207b4d&append_to_response=credits`; : To fetch movie details i.e cast , director ,genres etc

### How to use react

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


### Acknowledgments

TMDb API Team: For providing the movie data API.

React Community: For the powerful tools and libraries that make projects like this possible.

This project was made for Fancode interview process. Thanks to Fancode team.

### Additional Notes:

Live Demo Link: https://movie-e6wunw8ef-gautam-madirattas-projects.vercel.app/

(if the site doesnt work on link , try using a vpn)


