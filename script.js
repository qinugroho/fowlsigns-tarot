
let cards = [];

fetch('cards.json')
  .then(res => res.json())
  .then(data => {
    cards = data;
  });

function drawCards(count) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  const shuffled = [...cards].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  selected.forEach(card => {
    const isReversed = Math.random() < 0.5;
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h2>${card.name}${isReversed ? " (Reversed)" : ""}</h2>
      <img src="images/placeholder.png" alt="${card.name}" />
      <p><em>${card.description}</em></p>
      <p><strong>${isReversed ? card.reversed : card.upright}</strong></p>
      <blockquote>"${card.quote}"</blockquote>
      <p><strong>Voice Line:</strong> ${card.voice}</p>
      <audio controls>
        <source src="audio/placeholder.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;

    container.appendChild(div);
  });
}
