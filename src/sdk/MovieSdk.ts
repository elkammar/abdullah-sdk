import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Movie } from "../models/Movie";

interface MovieFilterOptions {
  limit?: number;
  page?: number;
  offset?: number;
  budgetInMillionsLessThan?: number;
  sort?: string;
}

class MovieSdk {
  private apiClient: AxiosInstance;

  constructor(apiKey: string) {
    this.apiClient = axios.create({
      baseURL: "https://the-one-api.dev/v2",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }

  private buildQueryString(options: MovieFilterOptions): string {
    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(options)) {
      queryParams.set(key, value.toString());
    }
    return queryParams.toString();
  }

  async getMovies(options: MovieFilterOptions = {}): Promise<Movie[]> {
    const queryString = this.buildQueryString(options);
    const response: AxiosResponse<Movie[]> = await this.apiClient.get(`movie${queryString ? '?' + queryString : ''}`);
    return response.data.map(movieData => new Movie(
      movieData.id,
      movieData.name,
      movieData.runtimeInMinutes,
      movieData.budgetInMillions,
      movieData.boxOfficeRevenueInMillions,
      movieData.academyAwardNominations,
      movieData.academyAwardWins,
      movieData.rottenTomatoesScore
    ));
  }

  async getMovie(id: string): Promise<Movie> {
    const response: AxiosResponse<Movie> = await this.apiClient.get(`movies/${id}`);
    const movieData = response.data;
    return new Movie(
      movieData.id,
      movieData.name,
      movieData.runtimeInMinutes,
      movieData.budgetInMillions,
      movieData.boxOfficeRevenueInMillions,
      movieData.academyAwardNominations,
      movieData.academyAwardWins,
      movieData.rottenTomatoesScore
    );
  }

  async getMovieQuote(id: string): Promise<string> {
    const response: AxiosResponse<{ quote: string }> = await this.apiClient.get(`movie/${id}/quote`);
    return response.data.quote;
  }
}
