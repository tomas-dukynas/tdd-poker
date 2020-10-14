import TexasHoldem from './TexasHoldem';

describe('TexasHoldem', () => {
  it('First Hand Case', () => {
    expect(TexasHoldem('2H 3H 4H 5H 6H', 'KS AS TS QS JS')).toBe(-1);
  });
  it('Second Hand Case', () => {
    expect(TexasHoldem('2H 3H 4H 5H 6H', 'AS AD AC AH JD')).toBe(1);
  });
  it('Third Hand Case', () => {
    expect(TexasHoldem('AS AH 2H AD AC', 'JS JD JC JH 3D')).toBe(1);
  });
  it('Forth Hand Case', () => {
    expect(TexasHoldem('2S AH 2H AS AC', 'JS JD JC JH AD')).toBe(-1);
  });
  it('Fifth Hand Case', () => {
    expect(TexasHoldem('2S AH 2H AS AC', '2H 3H 5H 6H 7H')).toBe(1);
  });
  it('Sixth Hand Case', () => {
    expect(TexasHoldem('AS 3S 4S 8S 2S', '2H 3H 5H 6H 7H')).toBe(1);
  });
  it('Seventh Hand Case', () => {
    expect(TexasHoldem('2H 3H 5H 6H 7H', '2S 3H 4H 5S 6C')).toBe(1);
  });
  it('Eight Hand Case', () => {
    expect(TexasHoldem('2S 3H 4H 5S 6C', '3D 4C 5H 6H 2S')).toBe(0);
  });
  it('Ninth Hand Case', () => {
    expect(TexasHoldem('2S 3H 4H 5S 6C', 'AH AC 5H 6H AS')).toBe(1);
  });
  it('Tenth Hand Case', () => {
    expect(TexasHoldem('2S 2H 4H 5S 4C', 'AH AC 5H 6H AS')).toBe(-1);
  });
  it('Eleventh Hand Case', () => {
    expect(TexasHoldem('2S 2H 4H 5S 4C', 'AH AC 5H 6H 7S')).toBe(1);
  });
  it('Twelfth Hand Case', () => {
    expect(TexasHoldem('6S AD 7H 4S AS', 'AH AC 5H 6H 7S')).toBe(-1);
  });
  it('Thirteenth Hand Case', () => {
    expect(TexasHoldem('2S AH 4H 5S KC', 'AH AC 5H 6H 7S')).toBe(-1);
  });
  it('Fourteenth Hand Case', () => {
    expect(TexasHoldem('2S 3H 6H 7S 9C', '7H 3C TH 6H 9S')).toBe(-1);
  });
  it('Fifteenth Hand Case', () => {
    expect(TexasHoldem('4S 5H 6H TS AC', '3S 5H 6H TS AC')).toBe(1);
  });
  it('Sixteenth Hand Case', () => {
    expect(TexasHoldem('2S AH 4H 5S 6C', 'AD 4C 5H 6H 2C')).toBe(0);
  });
});
