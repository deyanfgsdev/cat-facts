export type Fact = string | null;
export type FactState = [Fact, (newFact: Fact) => void];
