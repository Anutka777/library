let myLibrary = [];
let myLibraryIndex = 0;

const newBookButton = document.getElementById('new-book-btn');
newBookButton.addEventListener("click", addBookToLibrary);

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
})

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
  myLibraryIndex++;
  book.index = myLibraryIndex;
  displayBook(book);
  form.reset();
}

function displayBook(book) {
  const bookTable = document.getElementById("library-table");
  const bookRow = bookTable.insertRow();
  bookRow.setAttribute("id", `book-row-${book.index}`)
  const bookTitleCell = bookRow.insertCell();
  bookTitleCell.textContent = book.title;
  const bookAuthorCell = bookRow.insertCell();
  bookAuthorCell.textContent = book.author;
  const bookPagesCell = bookRow.insertCell();
  bookPagesCell.textContent = book.pages;
  const bookReadCell = bookRow.insertCell();
  bookReadCell.textContent = book.read;
  const bookDeleteCell = bookRow.insertCell();
  const bookDeleteButton = document.createElement("button")
  bookDeleteButton.setAttribute("id", `book-index-${book.index}`)
  bookDeleteButton.classList.add("delete-btn");
  bookDeleteButton.textContent = "X";
  bookDeleteCell.appendChild(bookDeleteButton);
}

function deleteBook(index) {
  let bookRow = document.getElementById(`book-row-${index}`);
  document.getElementById("library-table").removeChild(bookRow);
  myLibrary.splice(index - 1, 1);
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    deleteBook(e.target.id.split("-")[2])
  }
});
