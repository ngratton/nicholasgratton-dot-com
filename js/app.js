

// Talents
var barres = document.querySelectorAll('.barre-mesure')

barres.forEach(barre => {
    var mesure = barre.getAttribute('id') 
    var barreMesure = document.querySelector(`#${mesure}`)
    var barreWidth = barreMesure.style.width
    console.log(barre.style.width)
    
    // setTimeout(() => {
    //     console.log(barreMesure.style)
    // }, 1000)
})

// var main = document.querySelector('main')
// main.addEventListener('scroll', e => {
//     console.log('Scrolling !')
    
// })