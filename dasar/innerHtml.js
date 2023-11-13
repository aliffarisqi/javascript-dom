const judul = document.getElementById('judul');
judul.innerHTML = 'Judul telah di ganti';

//style
judul.style.color = 'lightgreen';
judul.style.backgroundColor = 'brown';

//manipulasi atribut
const paragraf1 = document.getElementsByClassName('p2');
paragraf1[0].style.color = 'brown';

paragraf1[0].setAttribute('id', 'p1');

//manipulasi class
