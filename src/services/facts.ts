import { CatFactResponse } from './facts.types';

const FACT_API_URL = 'https://catfact.ninja/fact';

export const fetchFact = () => {
  return fetch(FACT_API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch fact');
      }

      return response.json();
    })
    .then((data: CatFactResponse) => {
      const { fact } = data;

      return fact;
    })
    .catch((error) => {
      console.error(error.message);
    });
};
