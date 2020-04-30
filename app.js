class typeWriter  {
    constructor(txtElement, word , wait = 3000){
        this.txtElement = txtElement,
        this.word = word, 
        this.wait = parseInt(wait),
        this.wordIdex = 0,
        this.txt = '',
        this.isDeleting = false
    }

    type(){

       let current = this.wordIdex % this.word.length;
       let fultext = this.word[current];

       if (this.isDeleting){
            this.txt = fultext.substring(0, this.txt.length - 1);
       }else {
           this.txt = fultext.substring(0, this.txt.length + 1);
       }

       this.txtElement.innerHTML = `<span class= txt>${this.txt}</span>`;

       let typespeed = 300;
       // Deleting
       if (this.isDeleting){
           typespeed /= 1;
       }

       if(!this.isDeleting && this.txt === fultext){
           typespeed = this.wait;
           this.isDeleting = true;
       }else if(this.isDeleting && this.txt === '') {
           this.isDeleting = false;
           this.wordIdex ++;
           typespeed = 500;
       }


       let time = setTimeout(()=>{
           this.type()
        },typespeed)
        
    }
}

//init

function init (){
    let txtElement = document.querySelector('.txt-type');
    let word = JSON.parse(txtElement.getAttribute('data-words'));
    let wait = txtElement.getAttribute('data-wait');

    let type = new typeWriter(txtElement,word,wait);
    type.type();
}


document.addEventListener('DOMContentLoaded',init);