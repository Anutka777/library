let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  title = document.getElementById('title-new-book').value;
  author = document.getElementById('author-new-book').value;
  pages = document.getElementById("pages-new-book").value;
  read = document.getElementById("read-new-book").checked;
  book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBook(book);
}

function displayBook(book) {
  const bookTable = document.getElementById("library-table");
  const bookRow = bookTable.insertRow();
  const bookTitle = bookRow.insertCell();
  const bookAuthor = bookRow.insertCell();
  const bookPages = bookRow.insertCell();
  const bookRead = bookRow.insertCell();
  bookTitle.innerText = book.title;
  bookAuthor.innerText = book.author;
  bookPages.innerText = book.pages;
  bookRead.innerText = book.read;
}

// Output library
// myLibrary.forEach (book => displayBook(book));

const button = document.getElementById('new-book');
button.addEventListener("click", addBookToLibrary)

