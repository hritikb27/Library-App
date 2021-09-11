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
let book1;

// Data Storage
let storeData = [{title: 'Narnia', writer: 'C.S. Lewis', page: '768', status: true}];
let info = ['Title', 'Author', 'Pages', 'Status'];

// Initial Function Call for Demo Book
displayBooks();

// Add a Book Event Listener
newBook.addEventListener('click', ()=>{
    content.style.display = 'block';
})

// Closing Event Listeners
content.onclick = function(event){
    if(event.target.className === 'container'){
        content.style.display = 'none';
    }
}

close.addEventListener('click', ()=>{
    content.style.display = 'none';
})

// Book Constructor
const createBook = function (title, writer, page, status){
    this.title= title;  
    this.writer=writer;
    this.page=page;
    this.status=status;
}

// Submit Event Listener
submit.addEventListener('click', ()=>{
    if(!bookName.value){
        alert('Add a book name please');
    }
    if(!pages.valueAsNumber){
        alert('Add amount of Pages');
    }
    else{
        book1 = new createBook(bookName.value, author.value, pages.valueAsNumber,status.checked);
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

    let n = storeData[round];
    let i =0;

    for(let book in n){
        if(book.includes('status')){
            const readStatus = document.createElement('button');
            const isRead = n.status ? 'Read' : 'Not Read'
            const isReadClass = n.status ? 'read' : 'notread';
            readStatus.setAttribute('class', isReadClass)
            readStatus.textContent = `Status: ${isRead}`;
            readStatus.onclick = (e)=>{
                const content = readStatus.textContent;
                const textContent = content === 'Status: Read' ? 'Status: Not Read' : 'Status: Read';
                const classContent = content === 'Status: Read' ? 'notread' : 'read';
                readStatus.textContent = textContent
                readStatus.classList.remove()
                readStatus.setAttribute('class', classContent);
        }
        data.appendChild(readStatus);
        continue;
        }
        const h3 = document.createElement('h3');
        h3.textContent = `${info[i]}: ${n[book]}`;
        data.appendChild(h3);
        i++;        
    }
    
    const removeBook = document.createElement('button');
    removeBook.textContent = 'Remove'
    removeBook.setAttribute('class', 'remove-book');
    removeBook.onclick = (e)=>{
        Books.removeChild(data)
        storeData.splice(book1)
    }
    data.appendChild(removeBook)

    round += 1;
}
