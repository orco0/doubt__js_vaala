'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};





btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));//queryselectorall gives a node list in which we can use forEach loop

// btnsOpenModal.forEach(function (btn) {
//   console.log(btn);
// });



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




// console.log(document.documentElement);//if we want to apply css style on whole web page then we always need to select documentElement
// console.log(document.head);
// console.log(document.body);



let header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);//it will return a node list

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');//it select all the elements with the name of buttons
console.log(allButtons);//it will return a live HTML collection 



console.log(document.getElementsByClassName('btn'));


//Creating and inserting elements
// .insertAdjacentHTML -> types = beforebegin , afterbegin , beforeend  ,afterend

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>`;

message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie" style="z-index: 9999;">Got it</button>`;

document.querySelector('.cookie-message').style.display = 'block';


// header.prepend(message);//message became first child of header
header.append(message);// message became last child of header
// header.append(message.cloneNode(true));//copy hoke append ho jaayega

// document.querySelector('div.cookie-message').style.display = "block";



// header.before(message);//it insert the message before the header as a sibling
// header.after(message);//it insert the message after the header as a sibling

//Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     //1st way(new and easy way)
//     message.remove();
//     //2nd way (old way)
//     // message.parentElement.removeChild(message);
//   });






