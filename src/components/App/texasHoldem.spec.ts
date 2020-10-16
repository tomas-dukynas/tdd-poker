import { texasHoldem } from './texasHoldem';

describe('texasHoldem', () => {
  it('Royal flush', () => {
    expect(texasHoldem('2H 3H 4H 5H 6H', 'KS AS TS QS JS')).toBe(-1);
  });
  it('Straight Flush', () => {
    expect(texasHoldem('2H 3H 4H 5H 6H', 'AS AD AC AH JD')).toBe(1);
  });
  it('Four of a kind', () => {
    expect(texasHoldem('AS AH 2H AD AC', 'JS JD JC JH 3D')).toBe(1);
  });
  it('Four of a kind 2', () => {
    expect(texasHoldem('2S AH 2H AS AC', 'JS JD JC JH AD')).toBe(-1);
  });
  it('Full House', () => {
    expect(texasHoldem('2S AH 2H AS AC', '2H 3H 5H 6H 7H')).toBe(1);
  });
  it('Flush and high card', () => {
    expect(texasHoldem('AS 3S 4S 8S 2S', '2H 3H 5H 6H 7H')).toBe(1);
  });
  it('Flush', () => {
    expect(texasHoldem('2H 3H 5H 6H 7H', '2S 3H 4H 5S 6C')).toBe(1);
  });
  it('Straight with no winner', () => {
    expect(texasHoldem('2S 3H 4H 5S 6C', '3D 4C 5H 6H 2S')).toBe(0);
  });
  it('Straight', () => {
    expect(texasHoldem('2S 3H 4H 5S 6C', 'AH AC 5H 6H AS')).toBe(1);
  });
  it('Three of a kind', () => {
    expect(texasHoldem('2S 2H 4H 5S 4C', 'AH AC 5H 6H AS')).toBe(-1);
  });
  it('Two pairs', () => {
    expect(texasHoldem('2S 2H 4H 5S 4C', 'AH AC 5H 6H 7S')).toBe(1);
  });
  it('Two pairs and high card', () => {
    expect(texasHoldem('6S AD 7H 4S AS', 'AH AC 5H 6H 7S')).toBe(-1);
  });
  it('Pair', () => {
    expect(texasHoldem('2S AH 4H 5S KC', 'AH AC 5H 6H 7S')).toBe(-1);
  });
  it('High card', () => {
    expect(texasHoldem('2S 3H 6H 7S 9C', '7H 3C TH 6H 9S')).toBe(-1);
  });
  it('High card 2', () => {
    expect(texasHoldem('4S 5H 6H TS AC', '3S 5H 6H TS AC')).toBe(1);
  });
  it('Equal straight', () => {
    expect(texasHoldem('2S AH 4H 5S 6C', 'AD 4C 5H 6H 2C')).toBe(0);
  });
});
