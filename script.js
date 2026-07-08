const container = document.querySelector("#library-container");

const myLibrary = [];

function Book(title, author, bookPage, currentPage, description) {
  this.bookID = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.bookPage = bookPage;
  this.currentPage = currentPage;
  this.description = description;
}

function addBookToLibrary(title, author, bookPage, currentPage, description) {
  const newBook = new Book(title, author, bookPage, currentPage, description)
  myLibrary.push(newBook);
}

function createBook(index) {
  const libraryContainer = document.querySelector("#library-container");

  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  const bookDetails = document.createElement("div");
  bookDetails.classList.add("book-details")
  const title = document.createElement("h1");
  title.textContent = myLibrary[index].title;
  const author = document.createElement("em");
  author.textContent = myLibrary[index].author;
  const description = document.createElement("div");
  description.textContent = myLibrary[index].description;
  
  bookDetails.appendChild(title);
  bookDetails.appendChild(author);
  bookDetails.appendChild(description);
  
  const bookProgress = document.createElement("div");
  bookProgress.classList.add("book-progress");
  const lineOne = document.createElement("p");
  lineOne.textContent = "Page"
  const currentPage = document.createElement("p");
  currentPage.classList.add("current-page");
  currentPage.textContent = myLibrary[index].currentPage;
  const lineThree = document.createElement("p");
  lineThree.textContent = "of"
  const bookPage = document.createElement("p");
  bookPage.classList.add("bookPage");
  bookPage.textContent = myLibrary[index].bookPage;

  bookProgress.appendChild(lineOne);
  bookProgress.appendChild(currentPage);
  bookProgress.appendChild(lineThree);
  bookProgress.appendChild(bookPage);

  const bookButtons = document.createElement("div");
  bookButtons.classList.add("book-buttons");
  
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  editButton.classList.add("btn", "edit");
  deleteButton.classList.add("btn", "delete");
  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";
  
  bookButtons.appendChild(editButton);
  bookButtons.appendChild(deleteButton);
  
  bookCard.appendChild(bookDetails);
  bookCard.appendChild(bookProgress);
  bookCard.appendChild(bookButtons);
  
  bookCard.dataset.id = myLibrary[index].bookID;
  libraryContainer.appendChild(bookCard);
}

function displayBooks() {
  const container = document.querySelector("#library-container");
  container.innerHTML = "";

  const librarySize = myLibrary.length;

  for (let i = 0; i < librarySize; i++) {
    createBook(i);
  }
}

addBookToLibrary("Neuromancer", "William Gibson", 271, 50, "A hacker is hired for a final job");
addBookToLibrary("Snow Crash", "Neal Stephenson", 440, 0, "A pizza delivery guy in the metaverse");

displayBooks();

container.addEventListener('click', (event) => {
  if (event.target.classList.contains("delete")) {
    const card = event.target.parentElement.parentElement;
    const bookId = card.dataset.id;
    const index = myLibrary.findIndex(book => book.bookID === bookId);
    myLibrary.splice(index, 1);
    displayBooks();
  }
});

const dialog = document.querySelector("#add-book-dialog");
const headerAddBookBtn = document.querySelector(".add-book-btn"); // your header button
const closeBtn = document.querySelector("#close-dialog");
const form = document.querySelector("#add-book-form");

headerAddBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages")
const currentPageInput = document.querySelector("#currentPage");
const descriptionInput = document.querySelector("#description");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const currentPage = currentPageInput.value; 
  const description = descriptionInput.value;
  

  addBookToLibrary(title, author, pages, currentPage, description);
  displayBooks();
  dialog.close();
});


