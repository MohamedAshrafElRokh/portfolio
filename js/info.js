let titlelinks = document.getElementsByClassName("title-links");
let linkscontents = document.getElementsByClassName("links-content");


    function openinfo(infoname)
    {
        for(titlelink of titlelinks)
        {
            titlelink.classList.remove("titlef-link");
        }
        for(linkscontent of linkscontents)
        {
            linkscontent.classList.remove("active-content");
        }

        event.currentTarget.classList.add("titlef-link");
        document.getElementById(infoname).classList.add("active-content");
    }