
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

    const prophecy = generateProphecy(card, isReversed);

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
      <div class="prophecy">${prophecy}</div>
    `;

    container.appendChild(div);
  });
}

function generateProphecy(card, isReversed) {
  const meaning = isReversed ? card.reversed : card.upright;

  const openers = [
    "This means one thing:",
    "Interpretation? Easy:",
    "Oh no. Here it comes:",
    "Congrats, you've unlocked:"
  ];

  const chaosPhrases = [
    "You’re the reason the cult needs disclaimers.",
    "Reality bent slightly when you pulled this.",
    "You’ve misread worse. Keep going.",
    "If this feels personal, it probably is.",
    "This is what happens when you shuffle like a coward.",
    "Hope that clears it up. It won’t.",
    "The card is disappointed in you, honestly."
  ];

  const opener = openers[Math.floor(Math.random() * openers.length)];
  const chaos = chaosPhrases[Math.floor(Math.random() * chaosPhrases.length)];
  return `${opener} ${meaning}. ${chaos}`;
}
