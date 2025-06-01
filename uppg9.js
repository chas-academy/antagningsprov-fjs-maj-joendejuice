

function uppg9() {
  function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      const tal = arr[i];
      if (tal % 2 === 0) {
        console.log([tal, "jämt"]);
      } else {
        console.log([tal, "udda"]);
      }
    }
  }

  sort([1, 2, 3, 4, 5, 6]);
}

module.exports = { uppg9 };

