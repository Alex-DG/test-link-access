import './style.css'

const params = new URLSearchParams(document.location.search.substring(1))
const urlParam = params.get('flow') ? params.get('flow') : 1
const sourceParam = params.get('source') ? params.get('source') : 'none'

const LINK_TEST = `https://designium.staging.8thwall.app/murakami/?flow=${urlParam}&source=${sourceParam}`

console.log('LINK_TEST =', LINK_TEST)

document.querySelector('#app').innerHTML = `
  <div>

    <div class="test-link">
      <a href="${LINK_TEST}" target="_blank">
      LINK 1 TEST: target="_blank"
      </a>
    </div>
    
    <div class="test-link">
      <a href="${LINK_TEST}">
        LINK 2 TEST : no target
      </a>
    </div>


    <div class="test-link">
      <button id="openExperience">Open Experience</button>
    </div>
   
    <p class="read-the-docs">
      Click on one of the links or the button to open the experience.
    </p>

    <p class="read-the-docs">
      The button click logic hides the link URL from page inspection.
    </p>
  </div>
`

// HTML:
// <div class="test-link">
// <button id="openExperience">Open Experience</button>
// </div>

// JAVASCRIPT: -> Register the event listener after the HTML has been injected
document.getElementById('openExperience').addEventListener('click', () => {
  console.log('click!!!')
  const url = LINK_TEST
  window.open(url, '_blank') // Open in a new tab
})
