const faqQuestions = document.querySelectorAll('[data-faq-question]');

faqQuestions.forEach(question => {
  question.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    // Закриваємо всі інші
    faqQuestions.forEach(q => {
      q.setAttribute('aria-expanded', 'false');
      q.nextElementSibling.classList.remove('active');
    });

    // Відкриваємо поточний
    if (!isExpanded) {
      this.setAttribute('aria-expanded', 'true');
      answer.classList.add('active');
    }
  });
});
