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
let book2;
let book = 'book';
let info = ['Title', 'Author', 'Pages', 'Status'];

// Data Storage
let getData = JSON.parse(localStorage.getItem('book'));

// Book Constructor
class createBook {
    constructor(title, writer, page, status){
    this.title= title;  
    this.writer=writer;
    this.page=page;
    this.status=status;
    }

    // Function for Displaying Books on DOM
    addBookToDisplay(giveBook){
        const data = document.createElement('div');
        data.setAttribute('class', 'book-card');
        Books.appendChild(data);
        let j=0;

        for(let book in giveBook){
            if(book.includes('status')){
                const readStatus = document.createElement('button');
                const isRead = giveBook.status ? 'Read' : 'Not Read'
                const isReadClass = giveBook.status ? 'read' : 'notread';
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
            h3.textContent = `${info[j]}: ${giveBook[book]}`;
            data.appendChild(h3);
            j++; 
        }
        const removeBook = document.createElement('button');
            removeBook.textContent = 'Remove'
            removeBook.setAttribute('class', 'remove-book');
            removeBook.onclick = (e)=>{
                console.log(e.target.parentNode)
                Books.removeChild(data)
                console.log(localStorage.removeItem(e.target.parentNode))
        }
        data.appendChild(removeBook)
    }

    displayBooks(){
        getData.forEach((book) => {
            this.addBookToDisplay(book);
        });
    }

    checkDemoBook(){
        if(getData===null){
            const bookData = [{title: 'Narnia', writer: 'C.S. Lewis', page: '768', status: true}];
            localStorage.setItem('book', JSON.stringify(bookData));
            this.displayBooks();
            console.log(getData)
        }else{
            this.displayBooks();
        }
    }
}

// Initial Function Call for Demo Book
const demoBook = new createBook();
demoBook.checkDemoBook();

// Submit Event Listener
submit.addEventListener('click', ()=>{
    if(!bookName.value){
        alert('Add a book name please');
    }
    if(!pages.valueAsNumber){
        alert('Add amount of Pages');
    }
    else{
        book2 = new createBook(bookName.value, author.value, pages.valueAsNumber,status.checked);
        getData.push(book2);
        localStorage.setItem('book', JSON.stringify(getData));
        book2.addBookToDisplay(book2);
        form.reset();
    }

})

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