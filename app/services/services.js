var app = angular.module('myApp');

app.service('booksService', function ($http) {
  var books = [],
    searchedBooks = [],
    getBooksList,
    searchBooks,
    onSelectBook,
    getSelectedBook,
    getSearchedBooks,
    selectedBook,
    searchQuery,
    setSearchQuery;

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
    // console.log(name);
    return $http({
      method: 'GET',
      url: `https://bookbuddies-api.herokuapp.com/api/search?q=${searchQuery}`,
      headers: { Authorization: 'x0G4Q1Rceqa907jhTmrD' },
    }).then(function (response) {
      searchedBooks = response.data;
      // console.log(books);
      console.log(searchedBooks);
      return searchedBooks;
    });
  };

  setSearchQuery = function (query) {
    searchQuery = query;
  };

  getSearchedBooks = function () {
    return searchedBooks;
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
    searchBooks: searchBooks,
    getSearchedBooks: getSearchedBooks,
    setSearchQuery: setSearchQuery,
  };
});
