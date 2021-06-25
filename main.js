/* ABRE E FECHA O MENU  ... ABRE  X FECHA*/
const nav = document.querySelector('#header nav')

const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*FECHAR MENU QUANDO CLICAR EM ALGUM LINK DO MENU*/
const links = document.querySelectorAll('#header nav .menu ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //scroll maior que altura do header
    header.classList.add('scroll')
  } else {
    //scroll menor que altura do header
    header.classList.remove('scroll')
  }
})