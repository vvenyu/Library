const library = [];

//Object constructor

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
};

function addBookToLibrary() {
    const book1 = new Book('Atomic Habits', 'James Clear', 300);
    library.push(book1);
};


addBookToLibrary();
console.log(library);
