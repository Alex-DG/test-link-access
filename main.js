import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const params = new URLSearchParams(document.location.search.substring(1))
const urlParam = params.get('flow') ? params.get('flow') : 1

const LINK_TEST = `https://designium.staging.8thwall.app/murakami/?flow=${urlParam}`

console.log('LINK_TEST =', LINK_TEST)

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>

    <h1>Hello Vite!</h1>
    
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

    <div class="test-link">
      <a href="${LINK_TEST}" target="_blank">
      LINK TO TEST 1: target="_blank"
      </a>
    </div>
    
    <div class="test-link">
      <a href="${LINK_TEST}">
        LINK TO TEST 2: no target
      </a>
    </div>
   
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
