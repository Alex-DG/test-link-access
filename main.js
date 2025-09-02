import './style.css'

const params = new URLSearchParams(location.search)
const urlParam = params.get('scene') ?? 'character1'

const LINK_TEST = `https://alexdiguida-default-designium.dev.8thwall.app/localverse-character-photo/?scene=${urlParam}`
const B_ORIGIN = 'https://alexdiguida-default-designium.dev.8thwall.app'

function withReturn(url, ret) {
  const u = new URL(url)
  if (!u.searchParams.has('return')) u.searchParams.set('return', ret)
  return u.toString()
}

let winB = null

document.querySelector('#app').innerHTML = `
  <div>
    <div class="test-link">
      <!-- give the link an ID so we can intercept it -->
      <a id="openExperienceLink" href="${LINK_TEST}" target="_blank">
        LINK 1 TEST: target="_blank"
      </a>
    </div>

    <div class="test-link">
      <button id="openExperience">Open Experience</button>
    </div>

    <p class="read-the-docs">
      Click on the link or the button to open the experience.
    </p>
  </div>
`

// One function to open B and keep the handle
function openB() {
  const url = withReturn(LINK_TEST, location.href)
  // IMPORTANT: do NOT use rel=noopener — we need an opener relationship
  // Some browsers accept an explicit "noopener=no" feature string:
  winB = window.open(url, '_blank', 'noopener=no')
}

// Intercept the <a> so we open via script (and keep winB)
const linkEl = document.getElementById('openExperienceLink')
linkEl.addEventListener('click', (e) => {
  e.preventDefault()
  openB()
})
// Optional: handle middle-click too (so it still keeps opener)
linkEl.addEventListener('auxclick', (e) => {
  if (e.button === 1) {
    // middle mouse
    e.preventDefault()
    openB()
  }
})

// Button opens the same way
document.getElementById('openExperience').addEventListener('click', (e) => {
  e.preventDefault()
  openB()
})

// B will ask to close itself via postMessage
window.addEventListener('message', (e) => {
  if (e.origin === B_ORIGIN && e.data === 'please-close-me') {
    try {
      winB?.close()
    } catch {}
    window.focus()
  }
})
