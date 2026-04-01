const quizButtons = document.querySelectorAll('[data-answer]');
const quizResult = document.getElementById('quiz-result');

quizButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.dataset.answer;
    if (answer === 'correct') {
      quizResult.textContent = 'Correct! SDG 4 is Quality Education.';
      quizResult.style.color = '#1a7d4d';
    } else {
      quizResult.textContent = 'Try again — the right answer is Quality Education.';
      quizResult.style.color = '#c53030';
    }
  });
});
