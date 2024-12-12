import { useState, useEffect } from 'react';

import { fetchFact } from '../../services/facts';

import { Fact, FactState } from './useCatFact.types';

const useCatFact = () => {
  const [fact, setFact]: FactState = useState<Fact>(null);

  const refreshFact = () => {
    fetchFact().then((newFact) => {
      if (newFact) {
        setFact(newFact);
      }
    });
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
};

export default useCatFact;
