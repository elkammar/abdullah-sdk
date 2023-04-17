# Abdullah's Movie SDK

The Movie SDK is a TypeScript library designed to interact with a movie REST API. It provides an easy-to-use interface for developers to perform CRUD operations on the "Movie" resource and fetch movie quotes.

## Design

The SDK provides a simple and intuitive interface for developers to perform CRUD operations on the "Movie" resource and fetch movie quotes using the API. The SDK abstracts the underlying HTTP requests, allowing developers to focus on their application logic.

### Features

1. **Bearer Token Authentication**: The SDK uses the provided `api-key` access key as a bearer token for authentication, ensuring secure communication with the API.
2. **Endpoints**: The SDK covers the following API endpoints:
   - `/movie`
   - `/movie/{id}`
   - `/movie/{id}/quote`
3. **Abstractions**: The SDK provides higher-level abstractions over the API, making it easier to use and understand for developers.
4. **Pagination, Sorting, and Filtering**: The SDK supports pagination, sorting, and filtering options for the `/movie` endpoint, allowing developers to fetch movies based on specific criteria.

### SDK Class

The SDK includes the `MovieSdk` class, which provides the following methods:

1. `getMovies(options: MovieFilterOptions)`: Fetches a list of movies with optional pagination, sorting, and filtering.
2. `getMovie(id: string)`: Fetches the details of a specific movie based on its ID.
3. `getMovieQuote(id: string)`: Fetches a quote for a specific movie based on its ID.

The `MovieFilterOptions` interface allows developers to specify various query parameters for filtering and sorting the movie list, such as `limit`, `page`, `offset`, `budgetInMillionsLessThan`, and `sort`.

### Movie Model

The SDK also includes the `Movie` class, which represents a movie resource. It has the following properties:

- `id`: The movie's unique identifier.
- `name`: The movie's name.
- `runtimeInMinutes`: The movie's runtime in minutes.
- `budgetInMillions`: The movie's budget in millions.
- `boxOfficeRevenueInMillions`: The movie's box office revenue in millions.
- `academyAwardNominations`: The number of Academy Award nominations for the movie.
- `academyAwardWins`: The number of Academy Award wins for the movie.
- `rottenTomatoesScore`: The movie's Rotten Tomatoes score.

### Package Manager Deployment

The SDK is deployable to package managers like npm, making it easy for developers to include the SDK in their projects.

## Installation

To install the Movie SDK, run the following command:

```sh
npm install abdullah-sdk
```

### Usage
First, import the MovieSdk class from the SDK
```
import { MovieSdk } from "abdullah-sdk";
```

Next, instantiate the `MovieSdk` class with your api-key access key:
```
const apiKey = "your-api-key";
const movieSdk = new MovieSdk(apiKey);
```

Now you can use the available methods to interact with the API:

### Fetching Movies

To fetch a list of movies with optional pagination, sorting, and filtering:

```
async function fetchMovies() {
  const options = {
    limit: 10,
    sort: "name:asc",
    budgetInMillionsLessThan: 100,
  };
  const movies = await movieSdk.getMovies(options);
  console.log(movies);
}

fetchMovies();
```

### Fetching a Single Movie

To fetch the details of a specific movie by ID:

```typescript
async function fetchMovie() {
  const movieId = "some-movie-id";
  const movie = await movieSdk.getMovie(movieId);
  console.log(movie);
}

fetchMovie();
```

### Fetching a Movie Quote

Fetching a Movie Quote

```typescript
async function fetchMovieQuote() {
  const movieId = "some-movie-id";
  const quote = await movieSdk.getMovieQuote(movieId);
  console.log(quote);
}

fetchMovieQuote();
```
