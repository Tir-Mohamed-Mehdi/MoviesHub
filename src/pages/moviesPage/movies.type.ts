export interface moviesPage {
  page: number;
  results: moviesList[];
  total_pages: number;
  total_results: number;
}

export interface moviesList {
  adult: boolean;
  backdrop_path: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  title: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
