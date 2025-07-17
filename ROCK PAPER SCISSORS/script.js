const userScoreSpan = document.getElementById('user-score');
const botScoreSpan = document.getElementById('bot-score');
const resultText = document.getElementById('result-text');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let botScore = 0;

const botChoices = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.dataset.choice;
    const botChoice = botChoices[Math.floor(Math.random() * 3)];
    playRound(userChoice, botChoice);
  });
});

function playRound(user, bot) {
  const outcome = getResult(user, bot);

  if (outcome === 'win') {
    userScore++;
    resultText.textContent = `✅ You win! ${formatChoice(user)} beats ${formatChoice(bot)}.`;
  } else if (outcome === 'lose') {
    botScore++;
    resultText.textContent = `❌ You lose! ${formatChoice(bot)} beats ${formatChoice(user)}.`;
  } else {
    resultText.textContent = `🤝 It's a tie! You both chose ${formatChoice(user)}.`;
  }

  userScoreSpan.textContent = userScore;
  botScoreSpan.textContent = botScore;
}

function getResult(user, bot) {
  if (user === bot) return 'tie';
  if (
    (user === 'rock' && bot === 'scissors') ||
    (user === 'paper' && bot === 'rock') ||
    (user === 'scissors' && bot === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}

function formatChoice(choice) {
  switch (choice) {
    case 'rock': return '🪨 Rock';
    case 'paper': return '📄 Paper';
    case 'scissors': return '✂️ Scissors';
  }
}
