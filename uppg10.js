function uppg10() {
  const numbers = [5, 12, 7, 10, 20, 9, 11];

  const bigEven = [];
  const smallOdd = [];
  const other = [];

  for (let i = 0; i < numbers.length; i++) {
    const tal = numbers[i];

    if (tal > 10 && tal % 2 === 0) {
      bigEven.push(tal);
    } else if (tal < 10 && tal % 2 !== 0) {
      smallOdd.push(tal);
    } else {
      other.push(tal);
    }
  }

  return {
    bigEven,
    smallOdd,
    other,
  };
}

module.exports = { uppg10 };

  