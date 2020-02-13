function countOccurrences(str) {
  return _.mapObject(_.countBy(str));
}

console.log(countOccurrences('engineering'));
