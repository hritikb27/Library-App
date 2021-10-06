// All the Variable declared
const newBook = document.querySelector('#new-book');
const bookName =  document.querySelector('#book-name');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const serialNumber = document.querySelector('#serial');
const submit = document.querySelector('#submit');
const inputs = document.getElementsByTagName('input');
const Books = document.querySelector('.books');
const form = document.querySelector('form');
const status = document.querySelector('#status');
const content = document.querySelector('.container');
const close = document.querySelector('#close');
let book2;
// let book = 'book';
let info = ['Title', 'Author', 'Pages', 'SerialNo', 'Status'];

// Data Storage


// Book Constructor
class createBook {
    constructor(title, writer, page, serialNumber, status){
    this.title= title;  
    this.writer=writer;
    this.page=page;
    this.serialNumber=serialNumber;
    this.status=status;
    }
}

class UI {

    static checkDemoBook(){
        let getData = JSON.parse(localStorage.getItem('book'));
        if(getData==null||getData.length<1){
            Store.addBook({title: 'Narnia', writer: 'C.S. Lewis', page: '768', serialNumber: '1', status: true});
        }else{
            UI.displayBooks();
        }
    }

    // Function for Displaying Books on DOM
    static addBookToDisplay(giveBook){
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
            j++;
            continue;
            }
            const h3 = document.createElement('h3');
            // console.log(book)
            h3.textContent = `${info[j]}: ${giveBook[book]}`;
            data.appendChild(h3);
            j++;
        }

        const removeBook = document.createElement('button');
        removeBook.textContent = 'Remove';
        removeBook.setAttribute('class', 'remove-book');
        data.appendChild(removeBook);
    }

    static removeBook(target){
        if(target.textContent=='Remove'){
            const removeItem = target.parentElement;
            Books.removeChild(removeItem);
        }
    }

    static displayBooks(){
        const book = JSON.parse(localStorage.getItem('book'));
        book.forEach((book) => {
            this.addBookToDisplay(book);
        });
    }
}

class Store{
    static getBook(){
        let book;
        if(localStorage.getItem('book')===null){
            book = [];
        }else{
            book = JSON.parse(localStorage.getItem('book'));
        }

        return book;
    }

    static addBook(book){
        UI.addBookToDisplay(book);
        const booksArray = this.getBook();
        booksArray.push(book);
        localStorage.setItem('book', JSON.stringify(booksArray));
    }

    static removeBook(serial){
        const booksArray = this.getBook();
        booksArray.forEach((book, index)=>{
            if(book.serialNumber==serial){
                booksArray.splice(index, 1);
            }
            console.log(booksArray)
        })
        
        localStorage.setItem('book', JSON.stringify(booksArray))
        console.log(booksArray)
    }
}

// Initial Function Call for Demo Book
UI.checkDemoBook();

// Submit Event Listener
submit.addEventListener('click', ()=>{
    if(!bookName.value){
        alert('Add a book name please');
    }
    if(!pages.valueAsNumber){
        alert('Add amount of Pages');
    }
    else{
        book2 = new createBook(bookName.value, author.value, pages.valueAsNumber, serialNumber.valueAsNumber, status.checked);
        console.log(book2)
        Store.addBook(book2)
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

Books.addEventListener('click', (e)=>{
    UI.removeBook(e.target);
    Store.removeBook(e.target.parentElement.childNodes[3].textContent.split(' ')[1])
})