const DOMAIN = 'http://localhost:3000';
const API_TOKEN = '1A4OLp2eq97LmrSBECYYpGateFMY6BLVeow70rz0ktM';

// getQuestions makes a request to our Rails API backend
// and returns an array of questions in a promise
function getQuestions () {
  return fetch(`${DOMAIN}/api/v1/questions?api_token=${API_TOKEN}`)
    .then(function (res) { return res.json() })
}

// getQuestion makes request to our Rails API backend
// and returns a single question object in a promise of
// the given id
function getQuestion (id) {
  return fetch(`${DOMAIN}/api/v1/questions/${id}?api_token=${API_TOKEN}`)
    .then(function (res) { return res.json() })
}
