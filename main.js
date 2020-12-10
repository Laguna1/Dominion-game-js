const title = document.getElementById("title");
title.innerText = "Dominion";

const GAME_ID = "AI2DojFgOg4ytQpydSjH";
const BASE_URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api";

const scoresList = document.getElementById("scores");

const getCurrentScores = () => {
  fetch(`${BASE_URL}/games/${GAME_ID}/scores/`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((response) => {
      scoresList.innerText = "";
      response.result.forEach((obj) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${obj.user}:</span> ${obj.score}`;
        scoresList.appendChild(listItem);
      });
    });
};

const postScore = () => {
  const name = document.getElementById("player").value;
  const score = parseInt(document.getElementById("score").value);
  fetch(`${BASE_URL}/games/${GAME_ID}/scores/`, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: name,
      score: score,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      alert(response.result);
    });
};

const refreshBtn = document.getElementById("refresh");
refreshBtn.onclick = getCurrentScores;
const saveScoreBtn = document.getElementById("save-score");
saveScoreBtn.onclick = postScore;
