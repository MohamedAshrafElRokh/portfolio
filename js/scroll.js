window.onload = function()
{
    const header = document.querySelector(".header-info");
    const about  = document.querySelector(".about-container");
    const contact = document.querySelector(".contact-class");
    const aboutTitle = document.querySelector('.HH');

    window.addEventListener('scroll',scrollEffect);

    function scrollEffect()
    {
        if(window.scrollY>=header.offsetTop)
        {
            about.style.opacity = '1';
            about.style.transition = '0.5s ease-in-out';
            aboutTitle.style.color = "green";
            
        }
        else
        {
            about.style.opacity = '0';
            aboutTitle.style.color = "WHITE";
        }
        if(window.scrollY>=about.offsetTop)
        {
            contact.style.opacity = '1';
            contact.style.transition = '0.5s ease-in-out';
           
        }
        else
        {
            contact.style.opacity = '0';
        }
    }
    scrollEffect()
}

