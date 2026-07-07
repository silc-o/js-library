const myLibrary = [];


function Book(title, author, pages, currentProgress, description) {
  this.bookID = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.currentProgress = currentProgress;
  this.description = description;
}

function addBookToLibrary(title, author, pages, currentProgress, description) {
  const newBook = new Book(title, author, pages, currentProgress, description)
  myLibrary.push(newBook);
}