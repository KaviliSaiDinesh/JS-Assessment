class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false;
  }
}

class Fiction extends Book {
  constructor(id, title, author, genre) {
    super(id, title, author);
    this.genre = genre;
  }
}

class NonFiction extends Book {
  constructor(id, title, author, subject) {
    super(id, title, author);
    this.subject = subject;
  }
}


class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  viewBooks() {
    return this.books;
  }

  borrowBook(id) {
    const book = this.books.find(b => b.id === id);
    if (!book) {
      throw new Error('Book not found');
    }
    if (book.isBorrowed) {
      throw new Error('Book already borrowed');
    }
    book.isBorrowed = true;
    return book;
  }

  returnBook(id) {
    const book = this.books.find(b => b.id === id);
    if (!book) {
      throw new Error('Book not found');
    }
    if (!book.isBorrowed) {
      throw new Error('Book was not borrowed');
    }
    book.isBorrowed = false;
    return book;
  }
}


const library = new Library();

function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const type = document.getElementById('bookType').value.toLowerCase();
  const gs = document.getElementById('bookGenre').value;

  let book;
  const id = library.viewBooks().length + 1;

  if (type === 'fiction') {
    book = new Fiction(id, title, author, gs);
  } else if (type === 'non-fiction') {
    book = new NonFiction(id, title, author, gs);
  } else {
    alert('Invalid book type');
    return;
  }

  try {
    library.addBook(book);
    displayBooks();
  } catch (error) {
    alert(error.message);
  }
}

function displayBooks() {
  const booksList = document.getElementById('booksList');
  booksList.innerHTML = '';

  const books = library.viewBooks();
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.id}: ${book.title} written by ${book.author} - ${book.isBorrowed ? 'Borrowed' : 'Available'}`;
    booksList.appendChild(li);
  });
}

function borrowBook() {
  const id = parseInt(document.getElementById('bookId').value);

  try {
    library.borrowBook(id);
    displayBooks();
  } catch (error) {
    alert(error.message);
  }
}

function returnBook() {
  const id = parseInt(document.getElementById('bookId').value);

  try {
    library.returnBook(id);
    displayBooks();
  } catch (error) {
    alert(error.message);
  }
}

displayBooks();
