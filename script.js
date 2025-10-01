function showConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

function showBolinhas() {
  for (let i = 0; i < 20; i++) {
    let bolinha = document.createElement("img");
    bolinha.src = "gatinhoieu.jpg";
    bolinha.className = "bolinha";
    bolinha.style.left = Math.random() * 100 + "vw";
    bolinha.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(bolinha);

    setTimeout(() => bolinha.remove(), 6000);
  }
}

function showCurintia() {
  for (let i = 0; i < 20; i++) {
    let curintia = document.createElement("img");
    curintia.src = "curintia.png";
    curintia.className = "curintia";
    curintia.style.left = Math.random() * 100 + "vw";
    curintia.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(curintia);

    setTimeout(() => curintia.remove(), 6000);
  }
}

function showGatinho() {
  for (let i = 0; i < 20; i++) {
    let gatinho = document.createElement("img");
    gatinho.src = "gatinhocoitado.png";
    gatinho.className = "gatinho";
    gatinho.style.left = Math.random() * 100 + "vw";
    gatinho.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(gatinho);

    setTimeout(() => gatinho.remove(), 6000);
  }
}
