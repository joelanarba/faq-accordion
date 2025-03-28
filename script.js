'use strict';

const faqs = document.querySelectorAll('.faq-accordion-title');
const answers = document.querySelectorAll('.answer');
const btns = document.querySelectorAll('.btn');

// Ensure all FAQs are closed initially
answers.forEach(answer => answer.classList.add('hidden'));
btns.forEach(btn => btn.src = 'assets/images/icon-plus.svg');

// Make questions focusable so users can use Tab to navigate
faqs.forEach(faq => faq.setAttribute("tabindex", "0"));

// Function to toggle FAQs (on click or keypress)
const toggleFAQ = (i) => {
    // Close all other FAQs before opening a new one
    answers.forEach((answer, j) => {
        if (i !== j) { 
            answer.classList.add('hidden');
            btns[j].src = 'assets/images/icon-plus.svg';
        }
    });

    // Toggle the clicked FAQ
    answers[i].classList.toggle('hidden');
    btns[i].src = answers[i].classList.contains('hidden')
        ? 'assets/images/icon-plus.svg'
        : 'assets/images/icon-minus.svg';
};

// Function to move focus with Arrow Keys 
const moveFocus = (currentIndex, direction) => {
    let newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < faqs.length) {
        faqs[newIndex].focus();
    }
};

// Add event listeners for click & keyboard navigation
faqs.forEach((faq, i) => {
    // Click to toggle FAQ
    faq.addEventListener('click', () => toggleFAQ(i));

    // Keyboard navigation
    faq.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); 
            toggleFAQ(i);
        } else if (event.key === 'ArrowDown') {
            moveFocus(i, 1); 
        } else if (event.key === 'ArrowUp') {
            moveFocus(i, -1); 
        }
    });
});
