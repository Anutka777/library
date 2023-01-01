let myLibrary = [];
let myLibraryId = 0;

const newBookButton = document.getElementById("new-book-btn");
newBookButton.addEventListener("click", addBookToLibrary);

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  getFormData();
  book = new Book(title, author, pages, read);
  myLibrary.push(book);

  // Counter acts like an id
  myLibraryId++;
  book.id = myLibraryId;
  addRow(book);
  form.reset();
}

function getFormData() {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("read-status").checked;
}

function addRow(book) {
  const bookTable = document.getElementById("library-table");
  const bookRow = bookTable.insertRow();
  bookRow.setAttribute("id", `book-row-${book.id}`);

  // Add title cell
  const bookTitleCell = bookRow.insertCell();
  bookTitleCell.textContent = book.title;

  // Add author cell
  const bookAuthorCell = bookRow.insertCell();
  bookAuthorCell.textContent = book.author;

  // Add number of pages cell
  const bookPagesCell = bookRow.insertCell();
  bookPagesCell.textContent = book.pages;

  // Add read status cell
  const bookReadCell = bookRow.insertCell();
  const bookReadCheckbox = document.createElement("input");
  bookReadCheckbox.setAttribute("type", "checkbox");
  bookReadCheckbox.setAttribute("id", `book-read-${book.id}`);
  bookReadCell.appendChild(bookReadCheckbox);
  if (book.read == true) {
    document.getElementById(`book-read-${book.id}`).checked = true;
  }

  // Add delete cell
  const bookDeleteCell = bookRow.insertCell();
  const bookDeleteButton = document.createElement("button");
  bookDeleteButton.setAttribute("id", `book-id-${book.id}`);
  bookDeleteButton.classList.add("delete-btn");
  bookDeleteButton.textContent = "X";
  bookDeleteCell.appendChild(bookDeleteButton);
}

function deleteRow(id) {
  let bookRow = document.getElementById(`book-row-${id}`);
  document.getElementById("library-table").removeChild(bookRow);
  myLibrary.splice(id - 1, 1);
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    deleteRow(e.target.id.split("-")[2]);
  }
});
