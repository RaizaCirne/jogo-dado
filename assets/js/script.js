function alteraImg() {
  let sorteio = parseInt(Math.random() * 6 + 1);
  switch(sorteio) {
    case 1: 
      document.getElementById('imagem-dado').src='assets/images/face1.png';
      break; 
    case 2: 
      document.getElementById('imagem-dado').src='assets/images/face2.png';
      break; 
    case 3: 
      document.getElementById('imagem-dado').src='assets/images/face3.png';
      break;
    case 4: 
      document.getElementById('imagem-dado').src='assets/images/face4.png';
     break;
    case 5: 
     document.getElementById('imagem-dado').src='assets/images/face5.png';
      break;
    case 6: 
      document.getElementById('imagem-dado').src='assets/images/face6.png';
      default:
  }
}

var btn = document.getElementById('button');
btn.addEventListener('click', alteraImg);