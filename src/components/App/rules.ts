import {
  cardValues,
  getHighCard,
  getPairs,
  getSortedHand,
  areHandSuitsEqual,
} from './utils';
import { Hand, HandOrder } from './types';

const hasPair = (hand: Hand) => getPairs(hand).length === 1;

const hasTwoPairs = (hand: Hand) => getPairs(hand).length === 2;

const hasThreeOfAKind = (hand: Hand) =>
  hand.some(
    (card) => hand.filter((card2) => card2.value === card.value).length === 3,
  );

const hasFourOfAKind = (hand: Hand) =>
  hand.some(
    (card) => hand.filter((card2) => card2.value === card.value).length === 4,
  );

const hasStraight = (hand: Hand) =>
  getSortedHand(hand, HandOrder.LOW_TO_HIGH).reduce((acc, curr, idx) => {
    if (idx === 0) {
      return acc;
    }
    if (curr.value - 1 === hand[idx - 1].value) {
      return acc;
    }
    return false;
  }, true);

const hasFlush = (hand: Hand) =>
  !hand.some((card) => hand.some((card2) => card.suit !== card2.suit));

const hasFullHouse = (hand: Hand) => hasPair(hand) && hasThreeOfAKind(hand);

const hasStraightFlush = (hand: Hand) =>
  hasStraight(hand) && areHandSuitsEqual(hand);

const hasRoyalFlush = (hand: Hand) =>
  hasStraight(hand) &&
  areHandSuitsEqual(hand) &&
  getHighCard(hand) === cardValues.A;

export const rules = [
  hasPair,
  hasTwoPairs,
  hasThreeOfAKind,
  hasStraight,
  hasFlush,
  hasFullHouse,
  hasFourOfAKind,
  hasStraightFlush,
  hasRoyalFlush,
];
