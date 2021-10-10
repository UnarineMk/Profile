/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.navlink');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.htitle',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.homeimage',{delay: 400}); 
sr.reveal('.hsocialicon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.aboutimgage',{}); 
sr.reveal('.asubtitle',{delay: 400}); 
sr.reveal('.abouttext',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.ssubtitle',{}); 
sr.reveal('.skillstext',{}); 
sr.reveal('.skillswork',{interval: 200}); 
sr.reveal('.skillsimg',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.workimg',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact-input',{interval: 200}); 

