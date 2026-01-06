const getTheTitles = function (books) {
  //   return books.reduce((arr, currentBook) => {
  //     arr.push(currentBook.title);
  //     return arr;
  //   }, []);
  // Better way than above
  return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
