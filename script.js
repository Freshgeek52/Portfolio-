//toggle icon nav bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

//Scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
                links.dom.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active section for animation on scrool
            sec.classList.add('show-animate');
        }
        //if we want to use animation that repeats on scroll this 
        else{  
            sec.classList.remove('show-animate');
        }
    })
}


window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    //remove toggle icon and navbar when navbar links(scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active');

}