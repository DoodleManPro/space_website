const botton = document.querySelector('.btn');
const roll = document.querySelector('.roll');

botton.addEventListener('click', ()=> {
    botton.style.transition = '.4s';
    botton.style.opacity = '0';
    roll.classList.add('boom')
    roll.play()
});