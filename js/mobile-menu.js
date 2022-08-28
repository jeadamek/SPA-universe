const btnMobile = document.querySelector('#btn-mobile')

export function toggleMenu(event){
  if(event.type === 'touchstart'){
    event.preventDefault()
  }
  
  const nav = document.querySelector('nav')
  nav.classList.toggle('active')

  const active = nav.classList.contains('active')

  if(active){
    event.currentTarget.setAttribute('aria-expanded', true)
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-expanded', false)
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu) 
