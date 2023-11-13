// //menggunakan get element by id
// //get element by id mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';

// //get element by tagname
// //get element bytag name mengembalikan array
// const paragraph = document.getElementsByTagName('p');
// paragraph[2].style.backgroundColor = 'red';

// //get element by tagname mengembalikan nilai aray
// const paragraph1 = document.getElementsByClassName('p1');
// paragraph1[0].innerHTML = 'paragraph 1 diubah menjadi seperti ini';


//menggunakan query selector
// const paragraph4 = document.querySelector('#b p');
// paragraph4.style.color = 'red';

// //menggunakan queryselectorall
// const paragraphall = document.querySelectorAll('section#a p');
// for (let i = 0; i < paragraphall.length; i++) {
//     paragraphall[i].style.backgroundColor = 'yellow';
// } 

// mengubah node root
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'blue';
p4.style.color = 'white';