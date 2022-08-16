let myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.Title = title; 
    this.Author = author;
    this.Pages = pages;
    this.Status = isRead;
  }
//info() {
//  return (this.title + ", " + this.author + this.pages);
//}
}

function addBook(title, author, pages, isRead) {
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

function displayBook() {
  const content = document.querySelector(".main")

  //Remove all the previous displayed cards
  const currentDivs = document.querySelectorAll('.card');
  for (let i = 0; i < currentDivs.length; i++) {
    currentDivs[i].remove();
  }

  let index = 0 ;

  //looping over the array to display the books
  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');
    content.appendChild(card);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn'); 
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', removeBook);

    //Linking the removeBtn to the card set
    removeBtn.dataset.myLibrary = index;
    index++;

    card.appendChild(removeBtn);

    function removeBook() {
      bookToRemove = removeBtn.dataset.myLibrary;
      myLibrary.splice(parseInt(bookToRemove), 1);
      card.remove();
      displayBook();
    }

    for(let key in book) {
        const text = document.createElement('p');
        text.innerHTML = `${key}: ${book[key]}`
        card.appendChild(text);
    }
  })
}

//Function to reset the inputs to empty
function reset() {
document.getElementById('book').value = "";
document.getElementById('author').value = "";
document.getElementById('pages').value = "";
document.getElementById('isRead').value = "";
}

function pushData () {
  let title = document.getElementById('book').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let isRead = document.getElementById('isRead').value;

  addBook(title, author, pages, isRead);
  displayBook();
  reset();
}





