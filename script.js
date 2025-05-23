function getTodaysQuestion() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  return questions[dayOfYear % questions.length];
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

  // Word click-to-translate
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

document.addEventListener('DOMContentLoaded', () => {
  const q = getTodaysQuestion();
  renderQuestion(q);
});