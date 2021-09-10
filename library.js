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

const createBook = function (title, writer, page,){
    this.title= title;  
    this.writer=writer;
    this.page=page;
}


submit.addEventListener('click', ()=>{
    if(!bookName.value){
        alert('Add a book name please')
    }else{
        const book1 = new createBook(bookName.value, author.value, pages.valueAsNumber);
        storeData.push(book1);
        displayBooks();
        form.reset();
    }

})

function displayBooks(){
    const data = document.createElement('div');
    data.setAttribute('class', 'book-card');
    Books.appendChild(data);

    let n = Object.values(storeData[round]);
    let i =0;

    for(let book of n){
        const h3 = document.createElement('h3');
        h3.textContent = `${info[i]}: ${book}`;
        data.appendChild(h3);
        i++;
    }

    if(status.checked===true){
        const rStatus = document.createElement('button');
        rStatus.setAttribute('class', 'read')
        rStatus.textContent = 'Status: Read';
        data.appendChild(rStatus);
    }
    else if(!status.checked){
        const notStatus = document.createElement('button');
        notStatus.setAttribute('class', 'notread')
        notStatus.textContent = 'Status: Not Read';
        data.appendChild(notStatus);
    }
    round += 1;
}

