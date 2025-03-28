'use strict';

const faqs = document.querySelectorAll('.faq-accordion-title');
const answers = document.querySelectorAll('.answer');
const btns = document.querySelectorAll('.btn');

// Ensure all FAQs are closed initially
answers.forEach(answer => answer.classList.add('hidden'));
btns.forEach(btn => btn.src = 'assets/images/icon-plus.svg');

faqs.forEach((faq, i) => {
    faq.addEventListener('click', function () {
        // Close all other FAQs before opening the clicked one
        answers.forEach((answer, j) => {
            if (i !== j) { // If it's not the clicked one, close it
                answer.classList.add('hidden');
                btns[j].src = 'assets/images/icon-plus.svg';
            }
        });

        // Toggle the clicked FAQ
        answers[i].classList.toggle('hidden');
        btns[i].src = answers[i].classList.contains('hidden')
            ? 'assets/images/icon-plus.svg'
            : 'assets/images/icon-minus.svg';
    });
});
