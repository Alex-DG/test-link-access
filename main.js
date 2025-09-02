import './style.css'

const params = new URLSearchParams(location.search)
const urlParam = params.get('scene') ?? 'character1'

const LINK_TEST_BASE =
  'https://alexdiguida-default-designium.dev.8thwall.app/localverse-character-photo/'
const LINK_TEST = `${LINK_TEST_BASE}?scene=${urlParam}`

function withReturn(url, ret) {
  const u = new URL(url)
  if (!u.searchParams.has('return')) u.searchParams.set('return', ret)
  return u.toString()
}

let winB = null

document.querySelector('#app').innerHTML = `
  <div>
    <div class="test-link">
      <a id="openExperienceLink" href="${LINK_TEST}" target="_blank">Open Experience HTML link</a>
    </div>
    <div class="test-link">
      <button id="openExperience">Open Experience HTML button</button>
    </div>
    <p class="read-the-docs">Click the link or the button to open the WebAR experience.</p>
  </div>
`

function openWebArExperience() {
  const url = withReturn(LINK_TEST, location.href)
  winB = window.open(url, '_blank', 'noopener=no')
}

document.getElementById('openExperienceLink').addEventListener('click', (e) => {
  e.preventDefault()
  openWebArExperience()
})

document.getElementById('openExperience').addEventListener('click', (e) => {
  e.preventDefault()
  openWebArExperience()
})
