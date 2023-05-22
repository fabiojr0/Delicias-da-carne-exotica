function trocarCarnes(tipo=0) {
const h2Produtos = document.querySelectorAll(".produtos-txt h2");
const h3Item = document.querySelectorAll(".item h3");
const imgItem = document.querySelectorAll(".item img");

const lista = [  
bovinas = {
  h3: [
    "Shouder angus",
    "Tomahawk",
    "Ancho uruguaio",
    "Tbone angus"
  ],
  img: [
    "photos/shouderangus.png",
    "photos/tomahawk.png",
    "photos/ancho.png",
    "photos/tboneangus.png"
  ]
},
suinas = {
  
},
aves = {

},
exotica = {
  h3: [
    "Carre de javali",
    "Rã inteira",
    "Coelho inteiro",
    "Cortes de pato"
  ],
  img: [
    "photos/carrejavali.png",
    "photos/rainteira.png",
    "photos/coelhointeiro.png",
    "photos/pato.png"
  ]
}
]

for (let i = 0; i < 4; i++) {
  h3Item[i].innerText = lista[tipo].h3[i]
  imgItem[i].src = lista[tipo].img[i]
}

h2Produtos.forEach(function(h2, index) {
  if (index == tipo) {
    h2.classList.add("selected-category")
  }
  else{
    h2.classList.remove("selected-category")
  }
});

}
trocarCarnes()


function navColor() {
  const nav = document.querySelector('nav');
  const produtos = document.querySelector('.produtos');
  const tela = window.pageYOffset;
  if (tela > produtos.offsetTop - 30) {
    nav.classList.add('vidro')
  }else {
    nav.classList.remove('vidro')
  }
}
setInterval(navColor, 10)
navColor()



const navHref = document.querySelectorAll('nav a[href^="#"]');

navHref.forEach(item => {
  item.addEventListener('click', () => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    var section
    if (id == null) section = 0;
    else section = document.querySelector(id).offsetTop;

    window.scroll({
      top: section,
      behavior: "smooth",
    });
  });
})

