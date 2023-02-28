let myLibrary = [];



var bookCollection = document.getElementById('books');

let form = document.getElementById('bookform');

var delButton = document.createElement("button");
delButton.innerHTML = "Delete";






form.addEventListener('submit', (event) => {

console.log(form)


let newBookName = document.getElementById("bookname").value
let newBookAuthor = document.getElementById("authname").value
let newBookPages = document.getElementById("pages").value

let newBookRead =document.getElementById("read").value

console.log(newBookRead)


let newBook = new Book( newBookName, newBookAuthor, newBookPages, newBookRead)

 addBookToLibrary(newBook)
updateLibrary()
 console.log(newBook)


});


function Book(title, author, pages, isRead) {
  // the constructor...

  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

function addBookToLibrary(Book) {
  // do stuff here
  myLibrary.push(Book)



}


  
let resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('click', () => {
   myLibrary = [];
   updateLibrary()
} )



function updateLibrary() { 

  bookCollection.innerHTML = ''


for (let i=0; i < myLibrary.length; i++) { 
  const bookDiv = document.createElement('div')
  bookDiv.classList.add('bookDiv')
  
  const newTitle = document.createElement('h1')
  newTitle.textContent = myLibrary[i].title
  bookDiv.appendChild(newTitle)

  const newBookAuthor = document.createElement('h2')
  newBookAuthor.textContent = myLibrary[i].author
  bookDiv.appendChild(newBookAuthor)

  const newBookPages = document.createElement('h2')
  newBookPages.textContent = myLibrary[i].pages
  bookDiv.appendChild(newBookPages)

  const readStatus = document.createElement('h3')
  if(myLibrary[i].isRead) {
    readStatus.textContent = `You have already read ${myLibrary[i].title}`

  }
  else {
    readStatus.textContent = `You have not yet read ${myLibrary[i].title}`

  }
  bookDiv.appendChild(readStatus)
  // bookDiv.appendChild(delButton)


  bookCollection.appendChild(bookDiv)

  }


}





