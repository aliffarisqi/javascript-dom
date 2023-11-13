const tUahWarna = document.getElementById('tUbahWarna');

tUahWarna.addEventListener('click', function () {
    //mengubah warna bosy cara pertama
    //document.body.style.backgroundColor = 'lightblue';

    //cara dua
    //document.body.setAttribute('class', 'biru-muda')

    //cara tiga
    document.body.classList.toggle('biru-muda')

})
tUahWarna.addEventListener('mouseenter', function () {
    tUahWarna.style.backgroundColor = 'rgb(199, 114, 3)';
})
tUahWarna.addEventListener('mouseleave', function () {
    tUahWarna.style.backgroundColor = 'rgb(255, 157, 28)';
})

//membuat tombol baru dengan dom

const tAcakWarna = document.createElement('button');
const teksAcakWarna = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksAcakWarna);
tAcakWarna.setAttribute('type', 'button');
tAcakWarna.setAttribute('class', 'tombol');

tUahWarna.after(tAcakWarna);
tAcakWarna.addEventListener('click', function () {
    r = Math.round(Math.random() * 255 + 1);
    g = Math.round(Math.random() * 255 + 1);
    b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
tAcakWarna.addEventListener('mouseenter', function () {
    tAcakWarna.style.backgroundColor = 'rgb(199, 114, 3)';
})
tAcakWarna.addEventListener('mouseleave', function () {
    tAcakWarna.style.backgroundColor = 'rgb(255, 157, 28)';
})

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

})
sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

})
sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

})

document.body.addEventListener('mousemove', function (event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    console.log(xPos);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});