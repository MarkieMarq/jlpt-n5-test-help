function getDayOfYear(offset = 0) {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return (day + offset + questions.length) % questions.length;
}

function getQuestionByDay(offset = 0) {
  const index = getDayOfYear(offset);
  return questions[index];
}

function renderQuestion(q) {
  const qContainer = document.getElementById('question-container');
  const choicesList = document.getElementById('choices');
  const answerDiv = document.getElementById('answer');
  const explanationDiv = document.getElementById('explanation');

  qContainer.innerHTML = q.question;
  choicesList.innerHTML = '';
  answerDiv.classList.add('hidden');
  explanationDiv.classList.add('hidden');

  q.choices.forEach((choice, index) => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', () => {
      if (index === q.correctAnswer) {
        answerDiv.textContent = `Correct! The answer is: ${q.choices[q.correctAnswer]}`;
      } else {
        answerDiv.textContent = `Incorrect. The correct answer is: ${q.choices[q.correctAnswer]}`;
      }
      answerDiv.classList.remove('hidden');
      explanationDiv.textContent = q.explanation;
      explanationDiv.classList.remove('hidden');
    });
    choicesList.appendChild(li);
  });

  document.querySelectorAll('ruby').forEach(ruby => {
    ruby.addEventListener('click', () => {
      const word = ruby.textContent.trim();
      const baseWord = Object.keys(q.translations).find(k => word.includes(k));
      if (baseWord && q.translations[baseWord]) {
        alert(`${baseWord}: ${q.translations[baseWord]}`);
      }
    });
  });
}

function updateCountdown() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('countdown').textContent = `Next question in: ${hours}h ${minutes}m ${seconds}s`;
}

document.addEventListener('DOMContentLoaded', () => {
  let offset = 0;
  const question = getQuestionByDay(offset);
  renderQuestion(question);

  const toggleBtn = document.getElementById('toggle-day');
  toggleBtn.addEventListener('click', () => {
    offset = offset === 0 ? -1 : 0;
    toggleBtn.textContent = offset === 0 ? 'See Yesterday\'s Question' : 'Back to Today\'s Question';
    renderQuestion(getQuestionByDay(offset));
  });

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
