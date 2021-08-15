function openBar() {
    document.getElementById("sidebar").style.width = "45rem";
    document.body.classList.toggle('lock-scroll');
}


function closeBar() {
    document.getElementById("sidebar").style.width = "0";
}

const getEmailBox = () => {
    document.getElementById("input-box").style.display = "none";
    document.getElementById("email-box").style.display = "block";
    
}