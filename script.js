const cards = document.querySelector('.card');

cards.forEach(card => {
    card.addEventListner('click' ,flipcard);
});

let iscardflipped = false;
let firstcard,secondcard;


function flipcard(){
    this.classList.add('flip');

    
}