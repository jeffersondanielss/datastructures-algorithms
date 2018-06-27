const fibonacci = sequencePosition => {
  let fibSequence = [1, 1];

  for( let i = 2; i < sequencePosition; i++ ) {
    fibSequence[i] = fibSequence[i - 2] + fibSequence[i - 1];
  }

  return fibSequence.pop();
}

module.exports = fibonacci;