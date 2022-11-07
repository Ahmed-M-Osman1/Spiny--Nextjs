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
