import { Card, Hand, HandOrder } from './types';

export const cardValues = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

export const cardSuits = ['S', 'H', 'D', 'C'];

export const cardValueToNumber = (cardValue: keyof typeof cardValues) =>
  cardValues[cardValue];

export const parseHand = (input: string): Hand =>
  input.split(' ').map((card) => ({
    value: cardValueToNumber(card[0] as keyof typeof cardValues),
    suit: card[1],
  }));

export const getSortedHand = (hand: Hand, order: HandOrder) =>
  hand.sort((a, b) => {
    if (order === HandOrder.LOW_TO_HIGH) {
      return a.value - b.value;
    } else {
      return b.value - a.value;
    }
  });

export const getHighCard = (hand: Hand) =>
  Math.max(...hand.map((card) => card.value));

export const areHandSuitsEqual = (hand: Hand) =>
  !hand.some((card: Card) =>
    hand.some((card2: Card) => card.suit !== card2.suit),
  );

export const getPairs = (hand: Hand) =>
  hand.reduce((pairsAccumulator, card) => {
    const isPair =
      hand.filter((card2) => card2.value === card.value).length === 2;
    const isAlreadyListed = pairsAccumulator.some(
      (card2) => card.value === card2.value,
    );
    return isPair && !isAlreadyListed
      ? [...pairsAccumulator, card]
      : pairsAccumulator;
  }, [] as Card[]);
