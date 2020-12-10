const title = document.getElementById("title");
title.innerText = "Dominion";

const GAME_ID = "AI2DojFgOg4ytQpydSjH";
const BASE_URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api";

const refreshBtn = document.getElementById("refresh");
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

refreshBtn.onclick = getCurrentScores;
