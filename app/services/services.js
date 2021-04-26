var app = angular.module('myApp');

app.service('booksService', function ($http) {
  var books = [],
    getBooksList,
    onSelectBook,
    getSelectedBook,
    selectedBook;

  getBooksList = function () {
    return $http({
      method: 'GET',
      url: 'https://bookbuddies-api.herokuapp.com/api/bestsellers',
      headers: { Authorization: 'x0G4Q1Rceqa907jhTmrD' },
    }).then(function (response) {
      books = response.data;
      // console.log(books);
      return books;
    });
  };
  
  searchBooks = function () {
    var name=(document.getElementById("search")).value;
    console.log(name);
    return $http({
      method: 'GET',
      url: `https://bookbuddies-api.herokuapp.com/api/search?q=${name}`,
      headers: { Authorization: 'x0G4Q1Rceqa907jhTmrD' },
    }).then(function (response) {
      books = response.data;
      console.log(books);
      return books;
    });
  };

  onSelectBook = function (book) {
    selectedBook = book;
    console.log(selectedBook.title);
  };

  getSelectedBook = function () {
    return selectedBook;
  };

  return {
    getBooksList: getBooksList,
    onSelectBook: onSelectBook,
    getSelectedBook: getSelectedBook,
  };
});
