export type Card = { suit: string; value: number };
export type Hand = Card[];

export enum HandOrder {
  HIGH_TO_LOW,
  LOW_TO_HIGH,
}
