let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  title = document.getElementById('title').value;
  author = document.getElementById('author').value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("read-status").checked;
  book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBook(book);
}

function displayBook(book) {
  const bookTable = document.getElementById("library-table");
  const bookRow = bookTable.insertRow();
  const bookTitleCell = bookRow.insertCell();
  bookTitleCell.innerText = book.title;
  const bookAuthorCell = bookRow.insertCell();
  bookAuthorCell.innerText = book.author;
  const bookPagesCell = bookRow.insertCell();
  bookPagesCell.innerText = book.pages;
  const bookReadCell = bookRow.insertCell();
  bookReadCell.innerText = book.read;
  const bookDeleteCell = bookRow.insertCell();
  const bookDeleteButton = document.createElement("button")
  bookDeleteButton.innerText = "X";
  bookDeleteCell.appendChild(bookDeleteButton);
}

const button = document.getElementById('new-book-btn');
button.addEventListener("click", addBookToLibrary)

