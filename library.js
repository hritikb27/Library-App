const newBook = document.querySelector('#new-book');
const bookName =  document.querySelector('#book-name');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const submit = document.querySelector('#submit');
const inputs = document.getElementsByTagName('input');
const Books = document.querySelector('.books');
const form = document.querySelector('form');
const status = document.querySelector('#status');
const content = document.querySelector('.container');
const close = document.querySelector('#close');

let round = 0;
let storeData = [];
let storeStatus = [];
let info = ['Title', 'Author', 'Pages', 'Read-Status'];

newBook.addEventListener('click', ()=>{
    content.style.display = 'block';
})

window.onclick = function(event){
    if(event.target == content){
        content.style.display = 'none';
    }
}

close.addEventListener('click', ()=>{
    content.style.display = 'none';
})

const createBook = function (title, writer, page, status){
    this.title= title;  
    this.writer=writer;
    this.page=page;
}


submit.addEventListener('click', ()=>{
    const book1 = new createBook(bookName.value, author.value, pages.valueAsNumber);
    storeData.push(book1);
    if(bookName.value){
        displayBooks();
    }else{
        alert('Add a book name please')
    }
    form.reset();

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

    if(status.checked===true){
        const h3 = document.createElement('h3');
        h3.setAttribute('class', 'read')
        h3.innerHTML = `Status: Read`;
        data.appendChild(h3);
    }
    else if(!status.checked){
        const h3 = document.createElement('h3');
        h3.setAttribute('class', 'notread')
        h3.innerHTML = `Status: Not Read`;
        data.appendChild(h3);
    }
    round += 1;
}