// recuperando do html as classes (links-menu e sanduiche)
// precisamos tb armazenar em variáveis

const sanduiche =  document.querySelector('.sanduiche');
const linksMenu = document.querySelector('.links-menu');

// função que quando o botão do sanduiche for clicado aplicará/retirará a classe open, fazendo com que o menu seja exibido e ocultado.

sanduiche.addEventListener('click',() =>{
      linksMenu.classList.toggle('open');
  });
