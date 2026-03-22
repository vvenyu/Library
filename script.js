const library = [];

//Object constructor

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
    this.id = crypto.randomUUID();
};

function addBookToLibrary(title, author, pages, readed) {
    const book = new Book(title, author, pages, readed);
    library.push(book);
};

addBookToLibrary('Atomic Habits', 'James Clear', 300, 'yes');
addBookToLibrary('book2', 'John Cena', 400, 'no');

// DOM selectors
const content = document.querySelector('.content');


// Add books to the content
library.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readed = document.createElement('p');
    const svg = document.createElement('svg');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    readed.textContent = book.readed;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readed);
    content.appendChild(card);

});