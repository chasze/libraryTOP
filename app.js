let myLibrary = [];



var bookCollection = document.getElementById('books');

let form = document.getElementById('bookform');



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
  bookCollection.innerHTML += ` 
  <h2> ${myLibrary[i].title} </h2>  
  <p> ${myLibrary[i].author} <p>${myLibrary[i].pages} <p>
  `
  if(myLibrary[i].isRead == true ) {
    bookCollection.innerHTML += "<p> Read </p> <hr> "
  }
  else {
    bookCollection.innerHTML += "<p>not Read </p> <hr>  "
  }
  
  }



}





