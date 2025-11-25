function pfinal() {

  let preco = 1199.99
  let quantidade = document.getElementById("quant")
  const valor = quantidade.value
  let precof = preco * valor
  let precof2 = precof.toFixed(2)

  document.getElementById("txt2").innerHTML = (precof2)

  console.log(valor)
}


const star = document.getElementById('clickableStar');

star.addEventListener('click', () => {
  // Alterna a classe 'yellow' no elemento da estrela
  star.classList.toggle('yellow');
});





        const modal = document.getElementById('myModal');
        const btn = document.getElementById('openModalBtn');
        const span = document.querySelector('.close-button');
        const okButton = document.getElementById('closeModalButton2');

        // Quando o usuário clica no botão, abre o modal
        btn.onclick = function() {
            modal.style.display = "flex";
            confetti({
                particleCount: 1000, // Quantidade de confetes
                spread: 1000,         // Área de dispersão
                origin: { y: 0.6 }  // Ponto de origem na vertical (0 = topo, 1 = baixo)
              });
        }

        // Quando o usuário clica no 'x', fecha o modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // Quando o usuário clica no botão "OK", fecha o modal
        okButton.onclick = function() {
            modal.style.display = "none";
        }

        // Quando o usuário clica fora do modal, ele também fecha
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }









