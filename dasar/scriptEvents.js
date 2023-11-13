// menggunakan even handlerr onclick
const judul = document.getElementById('judul');
const p3 = document.getElementsByClassName('p3');

function ubahWarna() {
    p3[0].style.backgroundColor = "yellow";
}

function ubahWarnaJudul() {
    judul.style.backgroundColor = "green";
}
judul.onclick = ubahWarnaJudul;
p3[0].onclick = ubahWarna;

//menggunakan addeventListener

const p4 = document.getElementById('p4');

p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});

const ul2 = document.querySelector('section#b ul li:nth-child(2)');
ul2.addEventListener('mouseenter', function () {
    ul2.style.backgroundColor = "red";
});
ul2.addEventListener('mouseleave', function () {
    ul2.style.backgroundColor = "white";
});