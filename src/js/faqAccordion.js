const faqQuestions = document.querySelectorAll('[data-faq-question]');

faqQuestions.forEach(question => {
  question.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    faqQuestions.forEach(q => {
      q.setAttribute('aria-expanded', 'false');
      q.nextElementSibling.classList.remove('active');
    });

    if (!isExpanded) {
      this.setAttribute('aria-expanded', 'true');
      answer.classList.add('active');
    }
  });
});
