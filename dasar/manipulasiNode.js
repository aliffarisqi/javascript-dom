// DOM manipulasi

//membuat element sperti p dan lain lain

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraph baru');

//simpan teks  ke paragraph
pBaru.appendChild(teksPBaru);

//simpan di akhir section a

const sectionA = document.getElementById('a');
//apen child artinya menyimpan di akhir parrent
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');
ul.insertBefore(liBaru, li2);

