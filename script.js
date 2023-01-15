var tablink = document.getElementsByClassName("tab-link");
var tablecontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablinks of tablink){
        tablinks.classList.remove("active-link");
    }
    for(tabcontent of tablecontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 