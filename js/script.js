const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let fundo = document.querySelector('.game-board');
let botao = document.getElementById('btnReiniciar');

const jump = () =>{
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const look = setInterval(()=>{

  const marioPosition =+ window.getComputedStyle(mario).bottom.replace('px','');
  const pipePosition = pipe.offsetLeft;
  if(pipePosition <= 120 && pipePosition>0&& marioPosition <80){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = `none`;
    mario.style.bottom = `${marioPosition}px`;
    mario.src = `img/game-over.png`;
    mario.style.width = `75px`;
    mario.style.marginLeft = `50px`
    fundo.innerHTML += `<h1 id="gameOver">Game over</h1>`
    fundo.innerHTML += `<h1 id="gameOver2">Game over</h1>`
    botao.classList.remove('notOver');
    clearInterval(loop);
  }
},10);

document.addEventListener('keydown',jump);

function reiniciarPagina(){
  location.reload();
}

