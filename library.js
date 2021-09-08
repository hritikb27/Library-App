const newBook = document.querySelector('#new-book');
const bookName =  document.querySelector('#book-name');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const submit = document.querySelector('#submit');
const inputs = document.getElementsByTagName('input');


let storeData = [];

const createBook = function (title, writer, page,){
    this.title = title;
    this.writer = writer;
    this.page = page; 
}

submit.addEventListener('click', ()=>{
    const book1 = new createBook(bookName.value, author.value, pages.valueAsNumber);
    storeData.push(book1);
    console.log(storeData);

    for(let input of inputs){
        input.value = '';
    }
})