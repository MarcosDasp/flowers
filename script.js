function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 300);


  /////////

  const textos = [
    "Estrelas são pequenas diante da imensidão do que sinto por você. 🌟",
    "Palavras não são suficientes para descrever a alegria que você traz à minha vida. 💖",
    "Um oceano de amor seria pouco para mostrar o que você representa para mim. 🌊",
    "Cada batida do meu coração é uma declaração do quanto você é especial para mim. ❤️",
    "Nenhum presente poderia refletir a beleza do amor que sinto por você. 🎁",
    "Até o sol parece pálido comparado à luz que você traz para o meu mundo. ☀️",
    "As palavras fogem quando tento expressar o quanto você é importante para mim. 🥰",
    "Um universo inteiro seria pequeno para conter tudo o que sinto por você. 🌌",
    "Flores são pouco para expressar o quanto você significa para mim. 🌸"

];

let index = 0;

function mudarTexto() {
    const paragrafo = document.getElementById('texto');
    paragrafo.innerText = textos[index];
    index = (index + 1) % textos.length; // Cicla pelo array
}

setInterval(mudarTexto, 5000); // Muda o texto a cada 2 segundos
