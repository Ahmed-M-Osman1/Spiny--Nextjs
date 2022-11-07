export type Character = {
  title: string;
  route: string;
  image: string;
};

export type Movie = {
  title: string;
  description: string;
  id: number;
  image: string;
  resultType: string;
};

export type Parameters = {
  character: string;
};

export type MovieDetail = {
  fullTitle: string;
  image: string;
  releaseDate: string;
  plot: string;
  awards: string;
  genres: string;
  imDbRating: string;
  imDbRatingVotes: string;
};
