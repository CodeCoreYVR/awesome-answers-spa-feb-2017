const DOMAIN = 'http://localhost:3000';
const API_TOKEN = '1A4OLp2eq97LmrSBECYYpGateFMY6BLVeow70rz0ktM';

// getQuestions makes a request to our Rails API backend
// and returns an array of questions in a promise
function getQuestions () {
  return fetch(`${DOMAIN}/api/v1/questions?api_token=${API_TOKEN}`)
    .then(function (res) { return res.json() });
}

// getQuestion makes request to our Rails API backend
// and returns a single question object in a promise of
// the given id
function getQuestion (id) {
  return fetch(`${DOMAIN}/api/v1/questions/${id}?api_token=${API_TOKEN}`)
    .then(function (res) { return res.json() });
}

function renderQuestions (questions) {
  return questions.map(function (question) {
    return `
      <div class="question-summary">
        ${question.title}
      </div>
      <hr />
    `
  }).join('')
}

document.addEventListener('DOMContentLoaded', function () {
  // We put out DOM queries inside a DOMContentLoaded event handler
  // because the queried nodes at likely not rendered yet.
  // JavaScript inside of a DOMContentLoaded event handler will
  // run once every HTML tag has been rendered by the browser
  const questionsList = document.querySelector('#questions-list');

  getQuestions()
    .then(renderQuestions)
    .then(function (html) { questionsList.innerHTML = html })
});
