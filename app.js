let myLibrary = [];
let myLibraryCounter = 0;

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
  myLibraryCounter++;
  book.id = myLibraryCounter;
  displayBook(book);
}

function displayBook(book) {
  const bookTable = document.getElementById("library-table");
  const bookRow = bookTable.insertRow();
  bookRow.setAttribute("id", `book-row-${book.id}`)
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
  bookDeleteButton.setAttribute("id", `book-id-${book.id}`)
  bookDeleteButton.classList.add("delete-btn");
  bookDeleteButton.innerText = "X";
  bookDeleteCell.appendChild(bookDeleteButton);
}

function deleteBook(id) {
  console.log(id);
  let bookRow = document.getElementById(`book-row-${id}`);
  document.getElementById("library-table").removeChild(bookRow);
  myLibrary.splice(id - 1, 1);
  myLibraryCounter--;
}

const newBookButton = document.getElementById('new-book-btn');
newBookButton.addEventListener("click", addBookToLibrary);

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    deleteBook(e.target.id.split("-")[2])
  }
});
