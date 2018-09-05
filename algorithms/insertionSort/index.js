const insertionSort = n => {
  const arrayWidth = n.length;
  let position;
  let tmp;

  for( let index = 1; index < arrayWidth; index++ ) {
    position = index;
    tmp = n[index]

    while( position > 0 && n[position - 1] > tmp ) {
      n[position] = n[position - 1]
      position--
    }

    n[position] = tmp

  }

  return n
}

module.exports = insertionSort