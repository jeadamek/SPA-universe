import { Router } from './router.js'
import {
  changeToHomeBackground,
  changeToUniverseBackground,
  changeToExplorationBackground
} from './utils.js'
import './mobile-menu.js'

const homeLink = document.querySelector('#home')
const universeLink = document.querySelector('#universe')
const explorationLink = document.querySelector('#exploration')

const router = new Router()

// Creates Routes

router.add('/', './pages/home.html')
router.add('/universe', './pages/universe.html')
router.add('/exploration', './pages/exploration.html')
router.add(404, './pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

// Change background

homeLink.addEventListener('click', changeToHomeBackground)
universeLink.addEventListener('click', changeToUniverseBackground)
explorationLink.addEventListener('click', changeToExplorationBackground)


