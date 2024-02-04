let sorteio = parseInt(Math.random() * 6 + 1);

function alteraImg() {
  if (sorteio === 1) {
    document.getElementById('imagem-dado').src='assets/images/face1.png';
} else if (sorteio === 2) {
  document.getElementById('imagem-dado').src='assets/images/face2.png';
} else if (sorteio === 3) {
  document.getElementById('imagem-dado').src='assets/images/face3.png';
} else if (sorteio === 4) {
  document.getElementById('imagem-dado').src='assets/images/face4.png';
} else if (sorteio === 5) {
  document.getElementById('imagem-dado').src='assets/images/face5.png';
} else {
  document.getElementById('imagem-dado').src='assets/images/face6.png';
}
}



// const btn = document.getElementById('button');
// btn.addEventListener('click', function () {
//   alteraImg();
// })

switch(sorteio) {
  case 1: 
    alteraImg();
    break; 
  case 2: 
    alteraImg();
    break; 
  case 3: 
    alteraImg();
    break;
  case 4: 
    alteraImg();
   break;
  case 5: 
   alteraImg();
    break;
  case 6: 
    alteraImg();
    default:
}