/* 
**Carosello Mono Array**
- Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.



1. Creo il mio markup dove inserisco un'immagine al centro, il tutto in modo statico;

2. Creo i due bottoni che mi serviranno per cambiare le immagini;
3. Creo tutti gli stili e le classi di cui ho bisogno per svolgere l'esercizio;
4. Dopo aver completato le prime due fasi, tolgo l'immagine statica e creo una collection di immagini che poi andrò ad inserire in modo dinamico;
5. Creo un ciclo che gestisce le immagini, che di default saranno nascoste tranne la prima;
6. Gestisco due eventi diversi, uno per il bottone che va indietro e uno che va in avanti, in modo che al click del bottone corrispondente la prima immagine visualizzata viene nascosta e la successiva viene mostrata, poi nascosta al click e cosi via;

*/

//1. Salvo tutti i percorsi all'interno delle variabili di cui ho bisogno;

const itemsSliderRef = document.querySelector(".items-slider");
const itemsThumbsRef = document.querySelector(".items-thumbs");
const buttonLeftRef = document.querySelector(".up");
const buttonRightRef = document.querySelector(".down");
const itemRef = document.getElementsByClassName("item");
const thumbRef = document.getElementsByClassName("thumb");

//2. Creo la mia lista di immagini;

const images = [
  "assets/img/01.webp",
  "assets/img/02.webp",
  "assets/img/03.webp",
  "assets/img/04.webp",
  "assets/img/05.webp",
];

//3. Creo il ciclo dove gestisco la collection images

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  itemsSliderRef.innerHTML += `<img class="item hide" src="${img}" alt="">`;
  itemsThumbsRef.innerHTML += `<img src="${img}" class="thumb" alt=""></img>`;
}

//4. Rimuovo dal mio item la classe 'hide' per vsualizzare l'immagine;
itemRef[0].classList.remove("hide");
thumbRef[0].classList.add("active");

//5. Creo una variabile counter per gestire la classe 'hide';
let counter = 0;

//6. Creo l'evento al click per nascondere/mostrare le immagini;
buttonRightRef.addEventListener("click", function () {
  itemRef[counter].classList.add("hide");
  thumbRef[counter].classList.remove("active");
  counter++;

  itemRef[counter].classList.remove("hide");
  thumbRef[counter].classList.add("active");

   //quando vado avanti rimuovo hide dal bottone di sinistra
  buttonLeftRef.classList.remove('hide');


  // nascondo il bottone di destra una volta terminate le immagini;
  if (counter === images.length - 1) {
    buttonRightRef.classList.add("hide");
  }
});

//7. Creo l'evento al click per nascondere/mostrare le immagini al contrario, quindi decremento il counter;
buttonLeftRef.addEventListener("click", function () {
  itemRef[counter].classList.add("hide");
  thumbRef[counter].classList.remove("active");
  counter--;

  itemRef[counter].classList.remove("hide");
  thumbRef[counter].classList.add("active");

  //quando torno indetro rimuovo hide dal bottone destro 
  buttonRightRef.classList.remove('hide');

  // nascondo il bottone di sinistra quando il contatore ritorna allo 0;
  if (counter === 0) {
    buttonLeftRef.classList.add("hide");
  }
});
