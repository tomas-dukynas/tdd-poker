const checkPairs = (hand: string) => {
  let countOccurrences = 0;
  let countPair = 0;
  let isPair = false;
  let isTwoPairs = false;
  let isthreeOfKind = false;
  let isFullHouse = false;
  let isFourKind = false;
  for (let i = 0; i < hand.length; i += 2) {
    const re = new RegExp(hand[i], 'g');
    countOccurrences = (hand.match(re) || []).length;
    // console.log(countOccurrences);
    if (countOccurrences === 2) {
      isPair = true;
      if (countPair === 2) {
        isTwoPairs = true;
      }
      countPair++;
    } else if (countOccurrences === 3) {
      isthreeOfKind = true;
    } else if (countOccurrences === 4) {
      isFourKind = true;
    }
  }
  if (isPair && isthreeOfKind) {
    isFullHouse = true;
  }
  if (isFourKind) {
    isPair = false;
    isTwoPairs = false;
    isthreeOfKind = false;
  }
  if (isFullHouse) {
    isPair = false;
    isTwoPairs = false;
    isthreeOfKind = false;
  }
  if (isthreeOfKind) {
    isPair = false;
    isTwoPairs = false;
  }
  if (isTwoPairs) {
    isPair = false;
  }
  return [isPair, isTwoPairs, isthreeOfKind, isFullHouse, isFourKind];
};

const isStraight = (hand: string, values: string[]) => {
  const newSortedHand: string[] = new Array(0);
  let countHigh = 0;

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < hand.length - 1; j += 2) {
      if (hand[j] === values[i]) {
        if (i > 7) {
          newSortedHand.push((i + 2).toString());
        } else {
          newSortedHand.push(hand[j]);
        }
        countHigh += i + 1;
      }
    }
  }
  console.log(newSortedHand);
  let countStraight = 1;
  for (let i = 0; i < newSortedHand.length - 1; i++) {
    if (
      parseInt(newSortedHand[i], 10) + 1 ===
      parseInt(newSortedHand[i + 1], 10)
    ) {
      countStraight++;
    }
  }

  return [countStraight, countHigh];
};

const isFlush = (firstH: string, suits: string[]) => {
  let countOccurrences = 0;
  let isFlushCheck = false;
  suits.forEach((suit) => {
    const re = new RegExp(suit, 'g');
    countOccurrences = (firstH.match(re) || []).length;
    if (countOccurrences === 5) {
      isFlushCheck = true;
    }
  });
  return isFlushCheck;
};

const texasHoldem = (firstH: string, secondH: string) => {
  let rankFirst = 0;
  let rankSecond = 0;
  const newFirstH = firstH.replace(/\s/g, '');
  const newSecondH = secondH.replace(/\s/g, '');
  const value = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'T',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = ['S', 'H', 'D', 'C'];
  console.log(newFirstH);
  const rezPairsFirstHand = checkPairs(newFirstH);
  const rezPairsSecondHand = checkPairs(newSecondH);
  let temp = 2;
  for (let i = 0; i < rezPairsFirstHand.length; i++) {
    if (i < 3) {
      if (rezPairsFirstHand[i]) {
        rankFirst += temp;
      }
      if (rezPairsSecondHand[i]) {
        rankSecond += temp;
      }
    } else {
      if (rezPairsFirstHand[i]) {
        rankFirst += temp + 3;
      }
      if (rezPairsSecondHand[i]) {
        rankSecond += temp + 3;
      }
    }
    temp++;
    console.log(rankSecond);
  }

  const rezFlushFirstHand = isFlush(newFirstH, suits);
  const rezFlushSecondHand = isFlush(newSecondH, suits);
  if (rezFlushFirstHand) {
    rankFirst += 6;
  }
  if (rezFlushSecondHand) {
    rankSecond += 6;
  }

  const rezStraightFirstHand = isStraight(newFirstH, value);
  const rezStraightSecondHand = isStraight(newSecondH, value);
  if (rezStraightFirstHand[0] === 5) {
    rankFirst += 5;
  }
  if (rezStraightSecondHand[0] === 5) {
    rankSecond += 5;
  }
  if (rankFirst === rankSecond) {
    if (rezStraightFirstHand[1] > rezStraightSecondHand[1]) {
      rankFirst += 1;
    }
    if (rezStraightFirstHand[1] < rezStraightSecondHand[1]) {
      rankSecond += 1;
    }
  }
  // for review:d
  console.log(rankFirst, rankSecond);
  return checkWinner(rankFirst, rankSecond);
};
const checkWinner = (rankFirst: number, rankSecond: number) => {
  if (rankFirst > rankSecond) {
    return 1;
  } else if (rankFirst < rankSecond) {
    return -1;
  } else {
    return 0;
  }
};
export default texasHoldem;
