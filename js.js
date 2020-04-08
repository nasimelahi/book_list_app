//class for book

class book{
  constructor(title,author,isbn){
    this.title= title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI handle
class UI{
  static storebook(){
    let books = [
      {title: "Abu daud", author: "immm abu daud", isbn: "6543"},
      {title: "bukari", author: "immm bukari", isbn: "0543"}
    ];
    books.forEach((book) => UI.addbooktolist(book));
  }
  static addbooktolist(book){
    let form = document.querySelector('.tbody');
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" class="btn btn-sm btn-danger dalete">X</a></td>
    `;
    form.appendChild(tr);
  }

  static showalert(massage,clasName){
    let div = document.createElement('div');
    div.className = `alert alert-${clasName}`;
    div.innerHTML =  `${massage}`;
    let container = document.querySelector('.foo');
    let form = document.querySelector('.add');
    container.insertBefore(div,form);
    //vanish in 2 sec

    setTimeout((e) =>showalert.remove(),2000);
  }
  static deletebook(e){
    if(e.target.classList.contains('dalete')){
      e.target.parentElement.parentElement.remove();
    }
  }
}
//show book in list

document.addEventListener('DOMContentLoaded',UI.storebook);

//add to list

document.querySelector('.add').addEventListener('click',(e) =>{

  e.preventDefault();

  if (e.target.classList.contains('submit')) {

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;

    if (title == '' || author == '' || isbn == '') {
      UI.showalert('please fill the field','danger');
    }else{
      let books = new book(title,author,isbn);

      //console.log(books);

      //add to list

      UI.addbooktolist(books);
    }
   }

});

document.querySelector('.table').addEventListener('click',(e)=>{
  e.preventDefault();
  UI.deletebook(e);
  UI.showalert('book has been delated','danger')
});

