// All the Variable declared
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
let readStatus;

// Data Storage
let storeData = [];
let info = ['Title', 'Author', 'Pages'];

// Add a Book Event Listener
newBook.addEventListener('click', ()=>{
    content.style.display = 'block';
})

// Closing Event Listeners
window.onclick = function(event){
    if(event.target == content){
        content.style.display = 'none';
    }
}

close.addEventListener('click', ()=>{
    content.style.display = 'none';
})

// Book Constructor
const createBook = function (title, writer, page,){
    this.title= title;  
    this.writer=writer;
    this.page=page;
}

// Submit Event Listener
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

// Function for Displaying Books on DOM
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
        readStatus = document.createElement('button');
        readStatus.setAttribute('class', 'read')
        readStatus.textContent = 'Status: Read';
        readStatus.onclick = (e)=>{
            if(readStatus.textContent =='Status: Read'){
                readStatus.textContent = 'Status: Not Read';
                readStatus.setAttribute('class', 'notread')
            }
            else{
                readStatus.textContent = 'Status: Read';
                readStatus.setAttribute('class', 'read')
            }
        }
        data.appendChild(readStatus);
    }
    else if(!status.checked){
        const notStatus = document.createElement('button');
        notStatus.setAttribute('class', 'notread')
        notStatus.textContent = 'Status: Not Read';
        notStatus.onclick = (e)=>{
            if(notStatus.textContent == 'Status: Not Read'){
                notStatus.textContent = 'Status: Read';
                notStatus.setAttribute('class', 'read')
            }else{
                notStatus.textContent = 'Status: Not Read';
                notStatus.setAttribute('class', 'notread')
            }
            
        }
        data.appendChild(notStatus);
    }
    round += 1;
}
