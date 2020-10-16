import { parseHand } from './utils';
import { rules } from './rules';
import { getWinner } from './winnerCheck';

export const texasHoldem = (firstH: string, secondH: string) => {
  const parsedHand1 = parseHand(firstH);
  const parsedHand2 = parseHand(secondH);

  const firstRank = rules.map((rule) => rule(parsedHand1)).lastIndexOf(true);
  const secondRank = rules.map((rule) => rule(parsedHand2)).lastIndexOf(true);

  return getWinner(firstRank, secondRank, parsedHand1, parsedHand2);
};
