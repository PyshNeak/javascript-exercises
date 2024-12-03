const getTheTitles = function(books) {
    return books.reduce((total, cur) => {
        total.push(cur.title);
        return total;
    }, []);
};

/*
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
*/
// Do not edit below this line
module.exports = getTheTitles;
