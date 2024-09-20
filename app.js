ScrollReveal().reveal('.scrl', {delay:450});
         
document.querySelector('a[href="#go"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    const targetSection = document.querySelector('#go');
    if (targetSection) {
        targetSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
});

document.addEventListener('copy', function (e) {
    e.preventDefault();
}); 


document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.scroll-to-top');

  
    button.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    });

   
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { 
            button.classList.add('show');
        } else { 
            button.classList.remove('show');
        }
    });
});


    document.getElementById('linkedin-button').addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/eylul-agci/', '_blank');
    });

