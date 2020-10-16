import { Card, Hand, HandOrder } from './types';
import { getSortedHand } from './utils';

function compareHandsHighCard(firstHand: Card[], secondHand: Card[]) {
  const firstSortedHand = getSortedHand(firstHand, HandOrder.HIGH_TO_LOW);
  const secondSortedHand = getSortedHand(secondHand, HandOrder.HIGH_TO_LOW);
  const indexOfFirstDifferentCard = firstSortedHand.findIndex(
    (card: Card, idx: number) => secondSortedHand[idx].value !== card.value,
  );
  const firstHandCard = firstHand[indexOfFirstDifferentCard];
  const secondHandCard = secondHand[indexOfFirstDifferentCard];

  if (firstHandCard?.value > secondHandCard?.value) {
    return 1;
  } else if (firstHandCard?.value < secondHandCard?.value) {
    return -1;
  }
  return 0;
}

export const getWinner = (
  firstRank: number,
  secondRank: number,
  firstHand: Hand,
  secondHand: Hand,
): 1 | 0 | -1 => {
  if (firstRank > secondRank) {
    return 1;
  } else if (firstRank < secondRank) {
    return -1;
  } else {
    return compareHandsHighCard(firstHand, secondHand);
  }
};
