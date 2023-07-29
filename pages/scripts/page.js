let playerForm = document.getElementById("playerForm");
playerForm.addEventListener("submit", handlePlayerNameSubmit);

function handlePlayerNameSubmit(e) {
  console.log("form submitted");
  e.preventDefault();
  console.log(e.target.playerName.value);
}
