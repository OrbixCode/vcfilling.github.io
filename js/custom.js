 // Select the navigation
 const nav = document.getElementById('nav-onscroll-white');
 const wlogin = document.getElementById('w-login-onscroll');
 const wmenuitem = document.querySelectorAll('#w-menu-item a');
 const blacklogo = document.getElementById('blacklogo');
 const whitelogo = document.getElementById('whitelogo');
 const purplegetstart = document.getElementById('p-get-started');

 // purple-convert-button 
 // Function to handle scroll
 function handleScroll() {
   // Get the current scroll position
   const scrollY = window.scrollY;

   // Add or remove the "nav-scroll" class based on scroll position
   if (scrollY > 100) {
     nav.classList.add('w-nav');
     purplegetstart.classList.add('purple-button');
     wlogin.classList.add('w-login');
     nav.classList.remove('navigation-purple');
     blacklogo.style.display='block';
     whitelogo.style.display='none';
     wmenuitem.forEach((li) => {
       li.style.color = 'black';
     });

   } else {
     nav.classList.remove('w-nav');
     blacklogo.style.display='none';
     whitelogo.style.display='block';
     purplegetstart.classList.remove('purple-button');
     wlogin.classList.remove('w-login');
     wmenuitem.forEach((li) => {
       li.style.color = '#fff';
     });
   }
 }

 // Add a scroll event listener to the window
 window.addEventListener('scroll', handleScroll);

 // Initial call to handleScroll in case the page is loaded scrolled
 handleScroll();


 document.addEventListener('DOMContentLoaded', function() {
  // Select all expand buttons and answers
  const expandButtons = document.querySelectorAll('.expand-button');
  const answers = document.querySelectorAll('.awnser');
  
  // Add a click event listener to each expand button
  expandButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Toggle the visibility of the corresponding answer
      const answer = answers[index];
      
      answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  
    });
  });
  });
  