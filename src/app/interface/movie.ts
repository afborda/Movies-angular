export interface Imovies {
  count: number;
  next: any;
  previous: null;
  results: Array<Imovie>;
}

export interface Imovie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: string;
  edited: string;
  url: string;
}
