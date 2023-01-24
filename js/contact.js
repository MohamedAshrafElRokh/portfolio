window.onload = function()
{
    const contact = document.querySelector(".contact-class");
    window.addEventListener('scroll',scrollContact);
    function scrollContact()
    {
        if(window.scrollY>=800)
        {
            contact.style.opacity = '1';
            contact.style.transition = '0.5s ease-in-out';
            
        }else
        {
            contact.style.opacity = '0';
        }
    }
    cotactscroll();
}