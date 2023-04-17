# Movie SDK Design

The Movie SDK is a TypeScript library designed to interact with the liblab movie REST API. The SDK provides a simple and intuitive interface for developers to perform CRUD operations on the "Movie" resource and fetch movie quotes using the API. The SDK abstracts the underlying HTTP requests, allowing developers to focus on their application logic.

## Features

1. **Bearer Token Authentication**: The SDK uses the provided `api-key` access key as a bearer token for authentication, ensuring secure communication with the API.

2. **Endpoints**: The SDK covers the following API endpoints:
   - `/movie`
   - `/movie/{id}`
   - `/movie/{id}/quote`

3. **Abstractions**: The SDK provides higher-level abstractions over the API, making it easier to use and understand for developers.

4. **Pagination, Sorting, and Filtering**: The SDK supports pagination, sorting, and filtering options for the `/movie` endpoint, allowing developers to fetch movies based on specific criteria.

## SDK Class

The SDK includes the `MovieSdk` class, which provides the following methods:

1. `getMovies(options: MovieFilterOptions)`: Fetches a list of movies with optional pagination, sorting, and filtering.
2. `getMovie(id: string)`: Fetches the details of a specific movie based on its ID.
3. `getMovieQuote(id: string)`: Fetches a quote for a specific movie based on its ID.

The `MovieFilterOptions` interface allows developers to specify various query parameters for filtering and sorting the movie list, such as `limit`, `page`, `offset`, `budgetInMillionsLessThan`, and `sort`.

## Movie Model

The SDK also includes the `Movie` class, which represents a movie resource. It has the following properties:

- `id`: The movie's unique identifier.
- `name`: The movie's name.
- `runtimeInMinutes`: The movie's runtime in minutes.
- `budgetInMillions`: The movie's budget in millions.
- `boxOfficeRevenueInMillions`: The movie's box office revenue in millions.
- `academyAwardNominations`: The number of Academy Award nominations for the movie.
- `academyAwardWins`: The number of Academy Award wins for the movie.
- `rottenTomatoesScore`: The movie's Rotten Tomatoes score.

## Package Manager Deployment

The SDK is deployable to package managers like npm, making it easy for developers to include the SDK in their projects.

## Usage

To use the SDK, developers need to import the `MovieSdk` class, instantiate it with their `api-key` access key, and call the desired methods.

Example:

```typescript
import { MovieSdk } from "movie-sdk";

const apiKey = "your-api-key";
const movieSdk = new MovieSdk(apiKey);

async function fetchMovies() {
  const movies = await movieSdk.getMovies({ limit: 10, sort: "name:asc" });
  console.log(movies);
}

fetchMovies();
