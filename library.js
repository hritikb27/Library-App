const newBook = document.querySelector('#new-book');
const bookName =  document.querySelector('#book-name');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const submit = document.querySelector('#submit');
const inputs = document.getElementsByTagName('input');
const Books = document.querySelector('.books');
const form = document.querySelector('form');

let round = 0;
let storeData = [];
let info = ['Title', 'Author', 'Pages'];

const createBook = function (title, writer, page,){
    this.title= title;  
    this.writer=writer;
    this.page=page;     
}

submit.addEventListener('click', ()=>{
    const book1 = new createBook(bookName.value, author.value, pages.valueAsNumber);
    storeData.push(book1);
    form.reset();
    displayBooks();
})

function displayBooks(){
    const data = document.createElement('div');
    data.setAttribute('class', 'book-card');
    Books.appendChild(data);

    let n = Object.values(storeData[round]);
    let i =0;

    for(let book of n){
        const h3 = document.createElement('h3');
        h3.innerHTML = `${info[i]}: ${book}`;
        data.appendChild(h3);
        i++;
    }

    round += 1;
}