import { useState, useEffect } from 'react';

import { Fact } from '../useCatFact/useCatFact.types';
import { CatImageURL, CatImageURLState } from './useCatImage.types';

export const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says';

const useCatImage = ({ fact }: { fact: Fact }) => {
  const [catImageURL, setCatImageURL]: CatImageURLState =
    useState<CatImageURL>(null);

  useEffect(() => {
    if (!fact) {
      return;
    }

    const getCatRandomImage = async () => {
      try {
        const factFirstWord = fact.split(' ')[0];

        const response = await fetch(
          `${CAT_PREFIX_IMAGE_URL}/${factFirstWord}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }

        const { url: newCatImageUrl } = response;

        setCatImageURL(newCatImageUrl);
      } catch (error) {
        console.error(error instanceof Error ? error.message : error);
      }
    };

    getCatRandomImage();
  }, [fact]);

  return { catImageURL };
};

export default useCatImage;
