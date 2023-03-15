const setaDireita = document.querySelector('.seta-direita');

setaDireita.addEventListener('click', function() {
    let slide1 = document.querySelector('.slide-1');
    let slide2 = document.querySelector('.slide-2')
    slide1.classList.add('hide');
    slide2.classList.remove('hide'); 
})
