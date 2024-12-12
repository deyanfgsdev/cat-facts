export type CatImageURL = string | null;
export type CatImageURLState = [
  CatImageURL,
  (newCatImageURL: CatImageURL) => void,
];
