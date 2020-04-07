// books class

class book{
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}


//UI handle
class UI{
  static display_book () {
    let stored_books = [
      {
        title : "Bukari",
        author : "Bukari",
        isbn:'2323'
      },
      {
        title : "Muslim",
        author : "Muslim",
        isbn:'4343'
      }
    ];

    

    let books = stored_books;

    books.forEach((book) => UI.addbooktolist(book));

    
  }
    static addbooktolist(book){
        let tb = document.querySelector('.tbody');

        let tr = document.createElement('tr');

        tr.innerHTML = `

        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book .isbn}</td>
        <td> <a href="" class="btn btn-danger btn-sm delete">X</a>
        `;

        tb.appendChild(tr);
      }
      static showmassage(massage,classname){
          let div = document.createElement('div');
          div.className = `alert alert-${classname}`;
          
          div.innerHTML = `${massage}`;
          let container = document.querySelector('.foo');
          let form = document.querySelector('.add');
          container.insertBefore(div,form);
          // vanish alert

          setTimeout(()=> document.querySelector('.alert').remove(),2000);

      }
      static clearfield(){
        let title = document.querySelector('#title').value = '';
        let author = document.querySelector('#book').value = '';
        let isbn = document.querySelector('#isbn').value = '';
      }

      static deletebook(e){
        
          e.preventDefault();
            if (e.target.classList.contains('delete')) {
              e.target.parentElement.parentElement.remove();
            }
        

      }
    
}

// store books

class store{
  addbook(){

  }

  getbook(){

  }

  removebook (){

  }
}

//Show books

  document.addEventListener('DOMContentLoaded',UI.display_book);


//Event Listener

  //Add new book

  document.querySelector('.add').addEventListener('click',(e) => {
    e.preventDefault();
    if (e.target.classList.contains('submit')) {
      
      
     //Get all value
       let title = document.querySelector('#title').value;
       let author = document.querySelector('#book').value;
       let isbn = document.querySelector('#isbn').value;
 
     if (title === '' || author === '' || isbn === '') {
       UI.showmassage('please field all the form','danger');
     }else{
       //create new book
 
        const books = new book(title,author,isbn);
    
        // add book to list
    
        UI.addbooktolist(books);

        UI.showmassage('succesfully add book in list','success')

        //clear field

        UI.clearfield();
      
     }
    }
});

//delete books 

document.querySelector('.table').addEventListener('click',(e) => {
  UI.deletebook(e);
});



