const body = document.querySelector('body')
const main = document.querySelector('main')
const nav = document.querySelector('nav')

function resetBackground(){
  body.removeAttribute('class')
}

export function changeToHomeBackground(){
  resetBackground()
  body.classList.add('home')
}

export function changeToUniverseBackground(){
  resetBackground()
  body.classList.add('universe')
}

export function changeToExplorationBackground(){
  resetBackground()
  body.classList.add('exploration')
}

export function removeNavigation() {
  nav.style.display = 'none'
  main.style.minHeight = '100vh';
}