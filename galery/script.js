// const fotoBesar = document.querySelector('.besar');
// const thumbnail = document.querySelectorAll('.thumbnail');

// thumbnail.forEach(function (thumb) {
//     thumb.addEventListener('click', function (e) {
//         fotoBesar.setAttribute('src', 'foto/' + 2 + '.jpg');
//     })
// })

//cara lain

const container = document.querySelector('.container');
const besar = document.querySelector('.besar');
const thumbs = document.querySelectorAll('.thum');
container.addEventListener('click', function (e) {
    if (e.target.className == 'thum') {
        besar.src = e.target.src;
        besar.classList.add('fade');
        setTimeout(function () {
            besar.classList.remove('fade');
        }, 500)
        thumbs.forEach(function (thumb) {
            thumb.className = 'thum';
        })
        e.target.classList.add('active');

    }
})