// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function () {
//     card.style.display = "none";
// });

//cara dom Traversal

// const close = document.querySelectorAll('.close');

// //perulangan biasa
// // for (let i = 0; i < close.length; i++) {
// //     close[i].addEventListener('click', function (e) {
// //         //close[i].parentElement.style.display = 'none';
// //         //cara lain
// //         e.target.parentElement.style.display = 'none';
// //     });
// // }

// //menggunakan perulangan lain
// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         //prevent default berfungsi mencegah aksi, salah satunya a
//         e.preventDefault();
//         e.stopPropagation()
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert('ok');
//     });

// });

//cara yang lebih efectif

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
})