'use strict';

const faqs = document.querySelectorAll('.faq-accordion-title');
const answers = document.querySelectorAll('.answer');

for ( let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener('click', function (){
        answers[i].classList.toggle('hidden');
        // faqs[i].classList.toggle('active');
        // closeFAQ(); // Uncomment this line to close other open faqs when a new one is clicked. If you want to keep them open, remove this line.
    });   
}

// const closeFAQ = function (){
    
// }